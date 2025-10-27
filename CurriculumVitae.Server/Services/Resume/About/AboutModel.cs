using System.Text.Json.Serialization;

namespace CurriculumVitae.Server.Services.Resume.About;

public class AboutModel
{
    [JsonPropertyName("name")]
    public string Name { get; set; } = null!;

    [JsonPropertyName("email")]
    public string Email { get; set; } = null!;

    [JsonPropertyName("jobTitle")]
    public string JobTitle { get; set; } = null!;

    [JsonPropertyName("description")]
    public string Description { get; set; } = null!;
}
