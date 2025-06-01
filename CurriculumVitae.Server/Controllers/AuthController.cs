using CurriculumVitae.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace CurriculumVitae.Server.Controllers;

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
            Name = User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.Name)?.Value,
            GivenName = User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.GivenName)?.Value,
            Surname = User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.Surname)?.Value,
            Email = User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.Email)?.Value,
            EmailVerified = User.Claims.FirstOrDefault(claim => claim.Type == "email_verified")?.Value,
            Picture = User.Claims.FirstOrDefault(claim => claim.Type == "picture")?.Value,
            Locale = User.Claims.FirstOrDefault(claim => claim.Type == "locale")?.Value,
        };

        return user;
    }

    [HttpPost("login")]
    public ActionResult Login()
    {
        logger.LogInformation(
            "{} has signed in with {}.",
            User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.Name)?.Value,
            User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.Email)?.Value);

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
