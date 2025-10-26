using CurriculumVitae.Server.Services.Chat;
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
