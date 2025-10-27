using System.Text.Json.Serialization;

namespace CurriculumVitae.Server.Services.Resume.Skills;

public class SkillsModel
{
    [JsonPropertyName("category")]
    public string Category { get; set; } = null!;

    [JsonPropertyName("name")]
    public string Name { get; set; } = null!;

    [JsonPropertyName("logoUrl")]
    public string LogoUrl { get; set; } = null!;

    [JsonPropertyName("relevance")]
    public int Relevance { get; set; }

    [JsonPropertyName("proficiency")]
    public string Proficiency { get; set; } = null!;

    [JsonPropertyName("details")]
    public string? Details { get; set; }
}
