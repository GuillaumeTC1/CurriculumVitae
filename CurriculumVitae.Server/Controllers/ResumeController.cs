using CurriculumVitae.Server.Services.Resume.About;
using CurriculumVitae.Server.Services.Resume.Education;
using CurriculumVitae.Server.Services.Resume.Experiences;
using CurriculumVitae.Server.Services.Resume.Skills;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CurriculumVitae.Server.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
public class ResumeController(
    IAboutService aboutService,
    IEducationService educationService,
    IExperiencesService experiencesService,
    ISkillsService skillsService)
    : ControllerBase
{
    [HttpGet("about")]
    [ResponseCache(Duration = 3600)]
    public async Task<ActionResult<AboutModel>> GetAboutAsync()
    {
        var result = await aboutService.GetAboutAsync();
        return Ok(result);
    }

    [HttpGet("education")]
    [ResponseCache(Duration = 3600)]
    public async Task<ActionResult<IEnumerable<EducationModel>>> GetEducationAsync()
    {
        var result = await educationService.GetEducationAsync();
        return Ok(result);
    }

    [HttpGet("experiences")]
    [ResponseCache(Duration = 3600)]
    public async Task<ActionResult<IEnumerable<ExperiencesModel>>> GetExperiencesAsync()
    {
        var result = await experiencesService.GetExperiencesAsync();
        return Ok(result);
    }

    [HttpGet("skills")]
    [ResponseCache(Duration = 3600)]
    public async Task<ActionResult<IEnumerable<SkillsModel>>> GetSkillsAsync()
    {
        var result = await skillsService.GetSkillsAsync();
        return Ok(result);
    }
}


