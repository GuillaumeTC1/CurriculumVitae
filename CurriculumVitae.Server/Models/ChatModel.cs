using System.Text.Json.Serialization;

namespace CurriculumVitae.Server.Models;

public class ChatModel
{
    [JsonPropertyName("prompt")]
    public string Prompt { get; set; } = null!;
}
