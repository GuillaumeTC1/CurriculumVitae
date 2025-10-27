using System.Text.Json.Serialization;

namespace CurriculumVitae.Server.Services.Chat;

public class ChatMessageModel
{
    [JsonPropertyName("isUser")]
    public bool IsUser { get; set; }

    [JsonPropertyName("content")]
    public string Content { get; set; } = null!;
}
