using CurriculumVitae.Server.Services.Resume.Education;
using CurriculumVitae.Server.Services.Resume.Experiences;
using CurriculumVitae.Server.Services.Resume.Skills;
using CurriculumVitae.Server.Services.User;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace CurriculumVitae.Server;

public static class DependencyInjection
{
    public static IServiceCollection AddDatabase(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddDbContext<AppDbContext>(options =>
            options.UseNpgsql(
                configuration.GetConnectionString("Database")));

        return services;
    }
}

public class AppDbContext(
    DbContextOptions<AppDbContext> options)
    : DbContext(options)
{
    public DbSet<EducationEntity> Education { get; set; }
    public DbSet<ExperiencesEntity> Experiences { get; set; }
    public DbSet<SkillsEntity> Skills { get; set; }
    public DbSet<UserEntity> Users { get; set; }

    public DbSet<NoSql> NoSql { get; set; }
}

[Table("nosql")]
public class NoSql
{
    [Column("id")]
    public string Id { get; set; } = null!;

    [Column("data")]
    public string Data { get; set; } = null!;
}