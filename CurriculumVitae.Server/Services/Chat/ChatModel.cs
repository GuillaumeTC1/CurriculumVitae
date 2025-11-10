using System.Text.Json.Serialization;

namespace CurriculumVitae.Server.Services.Chat;

public class ChatModel
{
    [JsonPropertyName("model")]
    public string Model { get; set; } = null!;

    [JsonPropertyName("userMessage")]
    public string UserMessage { get; set; } = null!;
}
