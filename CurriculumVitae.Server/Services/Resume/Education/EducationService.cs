using Mapster;
using Microsoft.EntityFrameworkCore;

namespace CurriculumVitae.Server.Services.Resume.Education;

public interface IEducationService
{
    Task<IEnumerable<EducationModel>> GetEducationAsync();
}

internal class EducationService(
    AppDbContext dbContext) : IEducationService
{
    public async Task<IEnumerable<EducationModel>> GetEducationAsync()
    {
        return await dbContext.Education
            .OrderByDescending(x => x.EndDate)
            .ThenBy(x => x.StartDate)
            .ProjectToType<EducationModel>()
            .ToListAsync();
    }
}