using System.Text.Json.Serialization;

namespace CurriculumVitae.Server.Models;

public class SkillModel
{
    [JsonPropertyName("type")]
    public string Type { get; set; } = null!;

    [JsonPropertyName("name")]
    public string Name { get; set; } = null!;

    [JsonPropertyName("logoUrl")]
    public string LogoUrl { get; set; } = null!;
    
    [JsonPropertyName("relevance")]
    public int Relevance { get; set; }

    [JsonPropertyName("level")]
    public string Level { get; set; } = null!;

    [JsonPropertyName("details")]
    public string? Details { get; set; }
}
