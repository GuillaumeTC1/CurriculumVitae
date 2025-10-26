using CurriculumVitae.Server.Services.Resume.About;
using CurriculumVitae.Server.Services.Resume.Education;
using CurriculumVitae.Server.Services.Resume.Experiences;
using CurriculumVitae.Server.Services.Resume.Skills;
using Microsoft.Extensions.Options;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.ChatCompletion;
using System.Text.Json;

namespace CurriculumVitae.Server.Services.Chat;

public interface IChatService
{
    Task<string> Chat(string userId, string userMessage);
    Task<IEnumerable<ChatMessageModel>> GetHistory(string userId);
}

internal class ChatService : IChatService
{
    private readonly IKernelBuilder _builder;
    private readonly Kernel _kernel;
    private readonly OpenAiServiceOptions _openAIOptions;
    private readonly IChatCompletionService _chatCompletionService;

    private readonly string _chatInstructions;
    private static readonly Dictionary<string, ChatHistory> _userChats = [];

    public ChatService(
        IServiceProvider serviceProvider,
        IOptions<OpenAiServiceOptions> openAIOptions)
    {
        _openAIOptions = openAIOptions.Value;

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
        _builder.AddOpenAIChatCompletion(
            modelId: openAIOptions.Value.ChatModel,
            apiKey: openAIOptions.Value.Key
        );

        // Load every infos needed to answer questions
        using var scope = serviceProvider.CreateScope();
        _chatInstructions = BuildSystemPromptAsync(scope).GetAwaiter().GetResult();

        _kernel = _builder.Build();
        _chatCompletionService = _kernel.GetRequiredService<IChatCompletionService>();
    }

    public async Task<string> Chat(string userId, string userMessage)
    {
        var history = GetOrCreateChatHistory(userId);
        history.AddUserMessage(userMessage);

        var response = await _chatCompletionService.GetChatMessageContentAsync(history);
        history.AddAssistantMessage(response.Content);

        return response.Content;
    }

    public async Task<IEnumerable<ChatMessageModel>> GetHistory(string userId)
    {
        var history = GetOrCreateChatHistory(userId);

        return history
            .Where(message => message.Role == AuthorRole.User || message.Role == AuthorRole.Assistant)
            .Select(message => new ChatMessageModel()
            {
                IsUser = message.Role == AuthorRole.User,
                Content = message.Content
            });
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
        return _openAIOptions.SystemPrompt
            .Replace("{availableData}", availableData);
    }
}