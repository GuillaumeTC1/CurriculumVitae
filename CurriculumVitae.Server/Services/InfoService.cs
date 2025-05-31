using CurriculumVitae.Server.Models;
using System.Text.Json;

namespace CurriculumVitae.Server.Services;

public interface IInfoService
{
    Task<AboutModel> GetAboutAsync();
    Task<IEnumerable<FormationModel>> GetEducationAsync();
    Task<IEnumerable<ExperienceModel>> GetExperiencesAsync();
    Task<IEnumerable<SkillModel>> GetSkillsAsync();
}

internal class InfoService : IInfoService
{
    public async Task<AboutModel> GetAboutAsync()
    {
        return await GetJsonFileContentAsync<AboutModel>("./Data/about.json");
    }

    public async Task<IEnumerable<FormationModel>> GetEducationAsync()
    {
        return await GetJsonFileContentAsync<IEnumerable<FormationModel>>("./Data/education.json");
    }

    public async Task<IEnumerable<ExperienceModel>> GetExperiencesAsync()
    {
        return await GetJsonFileContentAsync<IEnumerable<ExperienceModel>>("./Data/experiences.json");
    }

    public async Task<IEnumerable<SkillModel>> GetSkillsAsync()
    {
        return await GetJsonFileContentAsync<IEnumerable<SkillModel>>("./Data/skills.json");
    }

    #region

    private static async Task<T> GetJsonFileContentAsync<T>(string path)
    {
        using StreamReader sr = new(path);
        return JsonSerializer.Deserialize<T>(await sr.ReadToEndAsync())
            ?? throw new InvalidCastException($"Content from {path} could not be deserialized as {typeof(T).Name}");
    }

    #endregion
}