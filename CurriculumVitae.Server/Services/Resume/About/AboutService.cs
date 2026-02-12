using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace CurriculumVitae.Server.Services.Resume.About;

public interface IAboutService
{
    Task<AboutModel> GetAboutAsync();
}

internal class AboutService(
    AppDbContext dbContext) : IAboutService
{
    public async Task<AboutModel> GetAboutAsync()
    {
        var document = await dbContext.NoSql.SingleAsync(x => x.Id == "resume_about");
        return JsonSerializer.Deserialize<AboutModel>(document.Data)
            ?? throw new InvalidCastException("Content from resume_about could not be deserialized as AboutModel");
    }
}