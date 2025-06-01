using CurriculumVitae.Server.Models;
using CurriculumVitae.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CurriculumVitae.Server.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
public class InfoController(
    IInfoService infoService)
    : ControllerBase
{
    [HttpGet("about")]
    [ResponseCache(Duration = 3600)]
    public async Task<ActionResult<AboutModel>> GetAboutAsync()
    {
        var result = await infoService.GetAboutAsync();
        return Ok(result);
    }

    [HttpGet("education")]
    [ResponseCache(Duration = 3600)]
    public async Task<ActionResult<IEnumerable<FormationModel>>> GetEducationAsync()
    {
        var result = await infoService.GetEducationAsync();
        return Ok(result);
    }

    [HttpGet("experiences")]
    [ResponseCache(Duration = 3600)]
    public async Task<ActionResult<IEnumerable<ExperienceModel>>> GetExperiencesAsync()
    {
        var result = await infoService.GetExperiencesAsync();
        return Ok(result);
    }

    [HttpGet("skills")]
    [ResponseCache(Duration = 3600)]
    public async Task<ActionResult<IEnumerable<SkillModel>>> GetSkillsAsync()
    {
        var result = await infoService.GetSkillsAsync();
        return Ok(result);
    }
}


