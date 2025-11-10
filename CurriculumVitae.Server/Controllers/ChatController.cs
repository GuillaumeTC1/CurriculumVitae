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
    public async Task<ActionResult> ChatAsync([FromBody] ChatModel model, CancellationToken cancellationToken)
    {
        var supportedModels = Enum.GetNames<SupportedChatModel>();
        if (!supportedModels.Contains(model.Model, StringComparer.OrdinalIgnoreCase))
        {
            return BadRequest($"The model '{model.Model}' is not supported. Supported models are: {string.Join(", ", supportedModels)}");
        }

        var chatModel = Enum.Parse<SupportedChatModel>(model.Model, true);
        var response = await chatService.ChatAsync(UserId, model.UserMessage, chatModel, cancellationToken);

        return Ok(response);
    }

    [HttpGet("history")]
    public async Task<ActionResult> GetHistory()
    {
        var response = chatService.GetHistoryAsync(UserId);
        return Ok(response);
    }
}
