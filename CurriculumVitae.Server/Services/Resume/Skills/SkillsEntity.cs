using System.ComponentModel.DataAnnotations.Schema;

namespace CurriculumVitae.Server.Services.Resume.Skills;

[Table("skills")]
public class SkillsEntity
{
    [Column("id")]
    public int Id { get; set; }

    [Column("name")]
    public string Name { get; set; } = null!;

    [Column("proficiency")]
    public string Proficiency { get; set; } = null!;

    [Column("relevance")]
    public string Relevance { get; set; } = null!;

    [Column("category")]
    public string? Category { get; set; } = null!;

    [Column("details")]
    public string? Details { get; set; } = null!;

    [Column("logo_url")]
    public string? LogoUrl { get; set; } = null!;
}
