using CurriculumVitae.Server.Services.Chat;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace CurriculumVitae.Server.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
public class ChatController(
    IChatService chatService)
    : ControllerBase
{
    private string UserId => User.Claims.First(claim => claim.Type == ClaimTypes.Email).Value;

    [HttpPost]
    public async Task<ActionResult> ChatAsync([FromBody] ChatModel model)
    {
        var response = await chatService.Chat(UserId, model.Prompt);
        return Ok(response);
    }

    [HttpGet("history")]
    public async Task<ActionResult> GetHistory()
    {
        var response = await chatService.GetHistory(UserId);
        return Ok(response);
    }
}
