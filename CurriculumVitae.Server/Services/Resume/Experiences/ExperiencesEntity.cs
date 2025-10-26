using System.ComponentModel.DataAnnotations.Schema;

namespace CurriculumVitae.Server.Services.Resume.Experiences;

[Table("experiences")]
public class ExperiencesEntity
{
    [Column("id")]
    public int Id { get; set; }

    [Column("company_name")]
    public string CompanyName { get; set; } = null!;

    [Column("job_title")]
    public string JobTitle { get; set; } = null!;

    [Column("description")]
    public string Description { get; set; } = null!;

    [Column("start_date")]
    public DateTime StartDate { get; set; }

    [Column ("end_date")]
    public DateTime? EndDate { get; set; }

    [Column("logo_url")]
    public string? LogoUrl { get; set; } = null!;
}
