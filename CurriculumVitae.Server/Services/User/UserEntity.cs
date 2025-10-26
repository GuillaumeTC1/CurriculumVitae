using System.ComponentModel.DataAnnotations.Schema;

namespace CurriculumVitae.Server.Services.User;

[Table("users")]
public class UserEntity
{
    [Column("id")]
    public int Id { get; set; }

    [Column("name")]
    public string Name { get; set; } = null!;

    [Column("email")]
    public string Email { get; set; } = null!;
}
