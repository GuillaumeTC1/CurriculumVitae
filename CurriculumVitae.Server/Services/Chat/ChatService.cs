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

/// <summary>
/// A Sematic Kernel skill that interacts with ChatGPT
/// </summary>
internal class ChatService : IChatService
{
    private readonly IKernelBuilder _builder;
    private readonly Kernel _kernel;
    private readonly IChatCompletionService _chatCompletionService;

    private readonly string _chatInstructions;
    private static readonly Dictionary<string, ChatHistory> _userChats = [];

    public ChatService(
        IServiceProvider serviceProvider,
        IOptions<OpenAiServiceOptions> openAIOptions)
    {
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
        string availableData = JsonSerializer.Serialize(new
        {
            About = scope.ServiceProvider.GetRequiredService<IAboutService>().GetAboutAsync().GetAwaiter().GetResult(),
            Eduction = scope.ServiceProvider.GetRequiredService<IEducationService>().GetEducationAsync().GetAwaiter().GetResult(),
            Experiences = scope.ServiceProvider.GetRequiredService<IExperiencesService>().GetExperiencesAsync().GetAwaiter().GetResult(),
            Skills = scope.ServiceProvider.GetRequiredService<ISkillsService>().GetSkillsAsync().GetAwaiter().GetResult()
        });

        // Create instructions for the chat, including the available data
        _chatInstructions = openAIOptions.Value.SystemPrompt
            .Replace("{availableData}", availableData);

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
            .Select(message => new ChatMessageModel() { 
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
}