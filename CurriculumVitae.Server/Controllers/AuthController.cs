using CurriculumVitae.Server.Services.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace CurriculumVitae.Server.Controllers;

// TODO: Implement proper authentication and authorization, this is just a placeholder for now to get the user information from the token and log it in the database.

[ApiController]
[Route("[controller]")]
[Authorize]
public class AuthController(
    ILogger<AuthController> logger)
    : ControllerBase
{
    [HttpGet("ping")]
    [ResponseCache(Duration = 60)]
    public ActionResult<UserModel> Ping()
    {
        var user = new UserModel()
        {
            Name = User.FindFirstValue(ClaimTypes.Name),
            GivenName = User.FindFirstValue(ClaimTypes.GivenName),
            Surname = User.FindFirstValue(ClaimTypes.Surname),
            Email = User.FindFirstValue(ClaimTypes.Email),
            EmailVerified = User.FindFirstValue("email_verified"),
            Picture = User.FindFirstValue("picture"),
            Locale = User.FindFirstValue("locale"),
        };

        return user;
    }

    [HttpPost("login")]
    public ActionResult Login()
    {
        logger.LogUserSignIn(User.FindFirstValue(ClaimTypes.Name), User.FindFirstValue(ClaimTypes.Email));

        return SignIn(User);
    }

    [HttpPost("logout")]
    public ActionResult Logout()
    {
        return SignOut();
    }

    [HttpGet("callback")]
    public ActionResult Callback([FromQuery] string code)
    {
        Login();
        return Redirect("/");
    }

    [HttpGet("linkedin")]
    [AllowAnonymous]
    public ActionResult LinkedIn()
    {
        return Redirect($"https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78x5jlbcl09xi1&redirect_uri=https://{HttpContext.Request.Host}/auth/callback&scope=openid%20profile");
    }
}

static partial class LoggerExtensions
{
    [LoggerMessage(Level = LogLevel.Information, Message = "{name} has signed in with {email}.")]
    public static partial void LogUserSignIn(this ILogger<AuthController> logger, string name, string email);
}