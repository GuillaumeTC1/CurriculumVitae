using Mapster;
using Microsoft.EntityFrameworkCore;

namespace CurriculumVitae.Server.Services.Resume.Skills;

public interface ISkillsService
{
    Task<IEnumerable<SkillsModel>> GetSkillsAsync();
}

internal class SkillsService(
    AppDbContext dbContext) : ISkillsService
{
    public async Task<IEnumerable<SkillsModel>> GetSkillsAsync()
    {
        return await dbContext.Skills
            .ProjectToType<SkillsModel>()
            .ToListAsync();
    }
}