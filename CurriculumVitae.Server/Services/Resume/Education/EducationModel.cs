using System.Text.Json.Serialization;

namespace CurriculumVitae.Server.Services.Resume.Education;

public class EducationModel
{
    [JsonPropertyName("institutionName")]
    public string InstitutionName { get; set; } = null!;

    [JsonPropertyName("degree")]
    public string Degree { get; set; } = null!;

    [JsonPropertyName("description")]
    public string Description { get; set; } = null!;

    [JsonPropertyName("startDate")]
    public string StartDate { get; set; } = null!;

    [JsonPropertyName("endDate")]
    public string? EndDate { get; set; } = null!;

    [JsonPropertyName("logoUrl")]
    public string? LogoUrl { get; set; } = null!;
}
