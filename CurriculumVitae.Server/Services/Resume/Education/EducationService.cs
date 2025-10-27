using Mapster;
using Microsoft.EntityFrameworkCore;

namespace CurriculumVitae.Server.Services.Resume.Education;

public interface IEducationService
{
    Task<IEnumerable<EducationModel>> GetEducationAsync();
}

internal class EducationService(
    MyDbContext dbContext) : IEducationService
{
    public async Task<IEnumerable<EducationModel>> GetEducationAsync()
    {
        return await dbContext.Education
            .ProjectToType<EducationModel>()
            .ToListAsync();
    }
}