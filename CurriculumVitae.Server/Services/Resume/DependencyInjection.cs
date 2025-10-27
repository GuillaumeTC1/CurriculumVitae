using CurriculumVitae.Server.Services.Resume.About;
using CurriculumVitae.Server.Services.Resume.Education;
using CurriculumVitae.Server.Services.Resume.Experiences;
using CurriculumVitae.Server.Services.Resume.Skills;

namespace CurriculumVitae.Server.Services.Resume;

internal static class DependencyInjection
{
    internal static IServiceCollection AddResumeServices(this IServiceCollection services)
    {
        return services
            .AddScoped<IAboutService, AboutService>()
            .AddScoped<IEducationService, EducationService>()
            .AddScoped<IExperiencesService, ExperiencesService>()
            .AddScoped<ISkillsService, SkillsService>();
    }
}
