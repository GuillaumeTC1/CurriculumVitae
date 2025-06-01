using CurriculumVitae.Server.Models;
using CurriculumVitae.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CurriculumVitae.Server.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
public class ChatController(
    IChatService chatService)
    : ControllerBase
{
    [HttpPost]
    public async Task<ActionResult> SendAsync([FromBody] ChatModel model)
    {
        return Ok(await chatService.Prompt(model.Prompt));
    }
}
