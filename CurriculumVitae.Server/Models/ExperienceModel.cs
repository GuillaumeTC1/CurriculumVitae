using System.Text.Json.Serialization;

namespace CurriculumVitae.Server.Models;

public class ExperienceModel
{
    [JsonPropertyName("company")]
    public string Company { get; set; } = null!;

    [JsonPropertyName("jobTitle")]
    public string JobTitle { get; set; } = null!;

    [JsonPropertyName("description")]
    public string Description { get; set; } = null!;

    [JsonPropertyName("startDate")]
    public string StartDate { get; set; } = null!;

    [JsonPropertyName("endDate")]
    public string? EndDate { get; set; } = null!;

    [JsonPropertyName("logoUrl")]
    public string? LogoUrl { get; set; } = null!;
}
