using System.Text.Json.Serialization;

namespace CurriculumVitae.Server.Services.Chat;

public class ChatModel
{
    [JsonPropertyName("prompt")]
    public string Prompt { get; set; } = null!;
}
