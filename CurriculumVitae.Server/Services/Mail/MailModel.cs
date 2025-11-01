using System.Text.Json.Serialization;

namespace CurriculumVitae.Server.Services.Mail;

public class MailModel
{
    [JsonPropertyName("content")]
    public string Content { get; set; } = null!;
}
