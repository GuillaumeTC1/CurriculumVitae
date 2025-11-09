using CurriculumVitae.Server.Services.Chat.Mistral;
using CurriculumVitae.Server.Services.Chat.OpenAi;
using CurriculumVitae.Server.Services.Resume.About;
using CurriculumVitae.Server.Services.Resume.Education;
using CurriculumVitae.Server.Services.Resume.Experiences;
using CurriculumVitae.Server.Services.Resume.Skills;
using Microsoft.Extensions.Options;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.ChatCompletion;
using System.Text.Json;

namespace CurriculumVitae.Server.Services.Chat;

public enum SupportedChatModel
{
    Mistral,
    OpenAi
}

public interface IChatService
{
    Task<string> ChatAsync(string userId, string userMessage, SupportedChatModel chatModel = SupportedChatModel.Mistral, CancellationToken cancellationToken = default);
    IAsyncEnumerable<ChatMessageModel> GetHistoryAsync(string userId);
}

internal class ChatService : IChatService
{
    private readonly IKernelBuilder _builder;
    private readonly Kernel _kernel;

    private readonly MistralOptions _mistralOptions;
    private readonly OpenAiOptions _openAiOptions;

    private readonly IChatCompletionService _mistralChatCompletionService;
    private readonly IChatCompletionService _openAiChatCompletionService;

    private readonly string _chatInstructions;
    private static readonly Dictionary<string, ChatHistory> _userChats = [];

    public ChatService(
        IServiceProvider serviceProvider,
        IOptions<OpenAiOptions> openAiOptions,
        IOptions<MistralOptions> mistralOptions)
    {
        _openAiOptions = openAiOptions.Value;
        _mistralOptions = mistralOptions.Value;

        // Set up the chat request settings
        //_chatRequestSettings = new ChatRequestSettings()
        //{
        //    MaxTokens = openAIOptions.Value.MaxTokens,
        //    Temperature = openAIOptions.Value.Temperature,
        //    FrequencyPenalty = openAIOptions.Value.FrequencyPenalty,
        //    PresencePenalty = openAIOptions.Value.PresencePenalty,
        //    TopP = openAIOptions.Value.TopP
        //};

        _builder = Kernel.CreateBuilder();

        _builder
            .AddMistralChatCompletion(_mistralOptions.Model, _mistralOptions.Key, serviceId: "MistralChatCompletion")
            .AddOpenAIChatCompletion(_openAiOptions.ChatModel, _openAiOptions.Key, serviceId: "OpenAIChatCompletion");

        // Load every infos needed to answer questions
        using var scope = serviceProvider.CreateScope();
        _chatInstructions = BuildSystemPromptAsync(scope).GetAwaiter().GetResult();

        _kernel = _builder.Build();
        
        _mistralChatCompletionService = _kernel.GetRequiredService<IChatCompletionService>("MistralChatCompletion");
        _openAiChatCompletionService = _kernel.GetRequiredService<IChatCompletionService>("OpenAIChatCompletion");
    }

    public async Task<string> ChatAsync(string userId, string userMessage, SupportedChatModel supportedChatModel, CancellationToken cancellationToken)
    {
        var history = GetOrCreateChatHistory(userId);
        history.AddUserMessage(userMessage);

        var chatCompletionService = supportedChatModel switch
        {
            SupportedChatModel.Mistral => _mistralChatCompletionService,
            SupportedChatModel.OpenAi => _openAiChatCompletionService,
            _ => throw new NotSupportedException($"The chat model {supportedChatModel} is not supported.")
        };

        var response = await chatCompletionService.GetChatMessageContentAsync(history, cancellationToken: cancellationToken);
        history.AddAssistantMessage(response.Content);

        return response.Content;
    }

    public async IAsyncEnumerable<ChatMessageModel> GetHistoryAsync(string userId)
    {
        var history = GetOrCreateChatHistory(userId)
            .Where(message => message.Role == AuthorRole.User || message.Role == AuthorRole.Assistant);

        foreach (var message in history)
        {
            yield return new ChatMessageModel()
            {
                IsUser = message.Role == AuthorRole.User,
                Content = message.Content
            };
        };
    }

    private ChatHistory GetOrCreateChatHistory(string userId)
    {
        if (!_userChats.TryGetValue(userId, out var history))
        {
            history = new ChatHistory(_chatInstructions);
            _userChats[userId] = history;
        }

        return history;
    }

    private async Task<string> BuildSystemPromptAsync(IServiceScope scope)
    {
        string availableData = JsonSerializer.Serialize(new
        {
            About = await scope.ServiceProvider.GetRequiredService<IAboutService>().GetAboutAsync(),
            Eduction = await scope.ServiceProvider.GetRequiredService<IEducationService>().GetEducationAsync(),
            Experiences = await scope.ServiceProvider.GetRequiredService<IExperiencesService>().GetExperiencesAsync(),
            Skills = await scope.ServiceProvider.GetRequiredService<ISkillsService>().GetSkillsAsync()
        });

        // Create instructions for the chat, including the available data
        return _openAiOptions.SystemPrompt
            .Replace("{availableData}", availableData);
    }
}