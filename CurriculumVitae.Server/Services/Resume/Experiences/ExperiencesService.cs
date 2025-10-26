using Mapster;
using Microsoft.EntityFrameworkCore;

namespace CurriculumVitae.Server.Services.Resume.Experiences;

public interface IExperiencesService
{
    Task<IEnumerable<ExperiencesModel>> GetExperiencesAsync();
}

internal class ExperiencesService(
    MyDbContext dbContext) : IExperiencesService
{
    public async Task<IEnumerable<ExperiencesModel>> GetExperiencesAsync()
    {
        return await dbContext.Experiences
            .ProjectToType<ExperiencesModel>()
            .ToListAsync();
    }
}