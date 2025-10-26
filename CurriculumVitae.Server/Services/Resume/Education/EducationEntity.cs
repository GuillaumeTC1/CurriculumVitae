using System.ComponentModel.DataAnnotations.Schema;

namespace CurriculumVitae.Server.Services.Resume.Education;

[Table("education")]
public class EducationEntity
{
    [Column("id")]
    public int Id { get; set; }

    [Column("institution_name")]
    public string InstitutionName { get; set; } = null!;

    [Column("degree")]
    public string Degree { get; set; } = null!;

    [Column("field_of_study")]
    public string FieldOfStudy { get; set; } = null!;

    [Column("start_date")]
    public DateTime StartDate { get; set; }

    [Column("end_date")]
    public DateTime? EndDate { get; set; }

    [Column("gpa")]
    public double? GPA { get; set; }

    [Column("description")]
    public string? Description { get; set; } = null!;

    [Column("logo_url")]
    public string? LogoUrl { get; set; } = null!;
}
