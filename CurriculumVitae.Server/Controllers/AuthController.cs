using CurriculumVitae.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace CurriculumVitae.Server.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
public class AuthController(ILogger<AuthController> logger) : ControllerBase
{
    [HttpGet("ping")]
    public ActionResult<User> Ping()
    {
        var user = new User()
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
    public ActionResult Login(ClaimsPrincipal user)
    {
        return SignIn(user);
    }

    [HttpPost("logout")]
    public ActionResult Logout()
    {
        return SignOut();
    }

    [HttpGet("callback")]
    public ActionResult Callback()
    {
        Login(User);
        return Redirect("/");
    }
}
