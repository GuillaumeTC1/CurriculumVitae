namespace CurriculumVitae.Server.Services.Chat.Mistral;

public class MistralOptions
{
    /// <summary>
    /// API Key.
    /// </summary>
    public string Key { get; set; } = null!;

    /// <summary>
    /// Name of the model to use.
    /// </summary>
    public string Model { get; set; } = null!;

    /// <summary>
    /// Initial prompt for the conversation.
    /// </summary>
    public string SystemPrompt { get; set; } = null!;
}