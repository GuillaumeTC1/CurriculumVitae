using System.Text.Json.Serialization;

namespace CurriculumVitae.Server.Models;

public class SkillModel
{
    [JsonPropertyName("type")]
    public string Type { get; set; } = null!;

    [JsonPropertyName("detail")]
    public string Detail { get; set; } = null!;

    [JsonPropertyName("logoUrl")]
    public string LogoUrl { get; set; } = null!;
}
