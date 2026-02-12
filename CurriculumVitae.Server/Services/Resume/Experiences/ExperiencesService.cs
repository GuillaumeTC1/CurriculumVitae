using Mapster;
using Microsoft.EntityFrameworkCore;

namespace CurriculumVitae.Server.Services.Resume.Experiences;

public interface IExperiencesService
{
    Task<IEnumerable<ExperiencesModel>> GetExperiencesAsync();
}

internal class ExperiencesService(
    AppDbContext dbContext) : IExperiencesService
{
    public async Task<IEnumerable<ExperiencesModel>> GetExperiencesAsync()
    {
        return await dbContext.Experiences
            .OrderByDescending(x => x.EndDate)
            .ThenByDescending(x => x.StartDate)
            .ProjectToType<ExperiencesModel>()
            .ToListAsync();
    }
}