using Microsoft.Extensions.Options;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.AI;
using Microsoft.SemanticKernel.AI.ChatCompletion;
using Microsoft.SemanticKernel.Connectors.OpenAI.ChatCompletion;
using Microsoft.SemanticKernel.SkillDefinition;
using System.Text.Json;

namespace CurriculumVitae.Server.Services;

public interface IChatService
{
    Task<string> Prompt(string prompt);
    Task LogChatHistory();
}

/// <summary>
/// A Sematic Kernel skill that interacts with ChatGPT
/// </summary>
internal class ChatService : IChatService
{
    private readonly IChatCompletion _chatCompletion;
    private readonly OpenAIChatHistory _chatHistory;
    private readonly ChatRequestSettings _chatRequestSettings;

    public ChatService(
        IKernel semanticKernel,
        IOptions<OpenAiServiceOptions> openAIOptions,
        IInfoService infoService)
    {
        // Set up the chat request settings
        _chatRequestSettings = new ChatRequestSettings()
        {
            MaxTokens = openAIOptions.Value.MaxTokens,
            Temperature = openAIOptions.Value.Temperature,
            FrequencyPenalty = openAIOptions.Value.FrequencyPenalty,
            PresencePenalty = openAIOptions.Value.PresencePenalty,
            TopP = openAIOptions.Value.TopP
        };

        // Configure the semantic kernel
        semanticKernel.Config.AddOpenAIChatCompletionService(
            "chat",
            openAIOptions.Value.ChatModel,
            openAIOptions.Value.Key);

        // Load every infos needed to answer questions
        string availableData = JsonSerializer.Serialize(new
        {
            About = infoService.GetAboutAsync(),
            Eduction = infoService.GetEducationAsync(),
            Experiences = infoService.GetExperiencesAsync(),
            Skills = infoService.GetSkillsAsync()
        });

        // Create instructions for the chat, including the available data
        string chatInstructions = openAIOptions.Value.SystemPrompt
            .Replace("{availableData}", availableData);

        // Set up the chat completion and history - the history is used to keep track of the conversation
        // and is part of the prompt sent to ChatGPT to allow a continuous conversation
        _chatCompletion = semanticKernel.GetService<IChatCompletion>();
        _chatHistory = (OpenAIChatHistory)_chatCompletion.CreateNewChat(chatInstructions);
    }

    /// <summary>
    /// Send a prompt to the LLM.
    /// </summary>
    [SKFunction("Send a prompt to the LLM.")]
    [SKFunctionName("Prompt")]
    public async Task<string> Prompt(string prompt)
    {
        try
        {
            // Add the question as a user message to the chat history, then send everything to OpenAI.
            // The chat history is used as context for the prompt
            _chatHistory.AddUserMessage(prompt);
            var reply = await _chatCompletion.GenerateMessageAsync(_chatHistory, _chatRequestSettings);

            // Add the interaction to the chat history.
            _chatHistory.AddAssistantMessage(reply);
            return reply;
        }
        catch (AIException aiex)
        {
            // Reply with the error message if there is one
            return $"OpenAI returned an error ({aiex.Message}). Please try again.";
        }
    }

    /// <summary>
    /// Log the history of the chat with the LLM.
    /// This will log the system prompt that configures the chat, along with the user and assistant messages.
    /// </summary>
    [SKFunction("Log the history of the chat with the LLM.")]
    [SKFunctionName("LogChatHistory")]
    public Task LogChatHistory()
    {
        Console.WriteLine();
        Console.WriteLine("Chat history:");
        Console.WriteLine();

        // Log the chat history including system, user and assistant (AI) messages
        foreach (var message in _chatHistory.Messages)
        {
            // Depending on the role, use a different color
            var role = message.AuthorRole;
            switch (role)
            {
                case "system":
                    role = "System:    ";
                    Console.ForegroundColor = ConsoleColor.Blue;
                    break;
                case "user":
                    role = "User:      ";
                    Console.ForegroundColor = ConsoleColor.Yellow;
                    break;
                case "assistant":
                    role = "Assistant: ";
                    Console.ForegroundColor = ConsoleColor.Green;
                    break;
            }

            // Write the role and the message
            Console.WriteLine($"{role}{message.Content}");
        }

        return Task.CompletedTask;
    }
}