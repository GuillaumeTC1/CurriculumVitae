using CurriculumVitae.Server.Models;
using CurriculumVitae.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CurriculumVitae.Server.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
public class MailingController(
    IMailingService mailingService)
    : ControllerBase
{
    [HttpPost]
    public async Task<ActionResult> SendAsync([FromBody] MailingModel model)
    {
        await mailingService.SendEmailAsync(
            "gcastelnau@laposte.net",
            "CurriculumVitae - Contact",
            model.Content);

        return Created();
    }
}
