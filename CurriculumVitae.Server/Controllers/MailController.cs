using CurriculumVitae.Server.Services.Mail;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CurriculumVitae.Server.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
public class MailController(
    IMailService mailService)
    : ControllerBase
{
    [HttpPost]
    public async Task<ActionResult> SendAsync([FromBody] MailModel model, CancellationToken cancellationToken)
    {
        var fromMail = User.Claims.First(claim => claim.Type == System.Security.Claims.ClaimTypes.Email).Value;
        var success = await mailService.SendMailAsync(fromMail, model.Content, cancellationToken);

        return success ? 
            Created() : Problem("Failed to send mail");
    }
}
