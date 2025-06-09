using System.Text.Json.Serialization;

namespace CurriculumVitae.Server.Models;

public class MailingModel
{
    [JsonPropertyName("content")]
    public string Content { get; set; } = null!;
}
