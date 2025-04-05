using CurriculumVitae.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CurriculumVitae.Server.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
public class InfoController(
    ILogger<InfoController> logger)
    : ControllerBase
{
    [HttpGet("profile")]
    [ResponseCache(Duration = 3600)]
    public async Task<ActionResult> GetProfileAsync()
    {
        using StreamReader sr = new("./Data/experiences.json");
        var content = sr.ReadToEndAsync();
        return Ok(await content);
    }

    [HttpGet("experiences")]
    [ResponseCache(Duration = 3600)]
    public async Task<ActionResult> GetExperiencesAsync()
    {
        using StreamReader sr = new("./Data/experiences.json");
        var content = sr.ReadToEndAsync();
        return Ok(await content);
    }

    [HttpGet("education")]
    [ResponseCache(Duration = 3600)]
    public async Task<ActionResult> GetEducationAsync()
    {
        using StreamReader sr = new("./Data/education.json");
        var content = sr.ReadToEndAsync();
        return Ok(await content);
    }

    [HttpGet("skills")]
    [ResponseCache(Duration = 3600)]
    public async Task<ActionResult> GetSkillsAsync()
    {
        using StreamReader sr = new("./Data/skills.json");
        var content = sr.ReadToEndAsync();
        return Ok(await content);
    }
}


