using Microsoft.AspNetCore.Identity;
using System.Text.Json.Serialization;

namespace CurriculumVitae.Server.Models;

public class User
{
    [JsonPropertyName("sub")]
    public string Sub { get; set; } = null!;

    [JsonPropertyName("name")]
    public string Name { get; set; } = null!;

    [JsonPropertyName("given_name")]
    public string GivenName { get; set; } = null!;

    [JsonPropertyName("surname")]
    public string Surname { get; set; } = null!;

    [JsonPropertyName("email")]
    public string Email { get; set; } = null!;

    [JsonPropertyName("email_verified")]
    public string EmailVerified { get; set; }

    [JsonPropertyName("picture")]
    public string Picture { get; set; } = null!;

    [JsonPropertyName("locale")]
    public string Locale { get; set; } = null!;
}
