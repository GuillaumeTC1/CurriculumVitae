using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;

namespace CurriculumVitae.Server.Identity;

internal static class DependencyInjection
{
    internal static AuthenticationBuilder AddLinkedInAuthentication(this IServiceCollection services)
    {
        var configuration = services.BuildServiceProvider().GetRequiredService<IConfiguration>();

        return services.AddAuthentication(options =>
        {
            options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
        })
           .AddCookie(options =>
           {
               options.Cookie.Name = "OIDC_CvGuillaume";
           })
           .AddOpenIdConnect(options =>
           {
               options.SignInScheme = "Cookies";
               options.Authority = configuration["Authentication:LinkedIn:Authority"];
               options.CallbackPath = configuration.GetValue<PathString>("Authentication:LinkedIn:CallbackPath");
               options.RequireHttpsMetadata = true;
               options.ClientId = configuration["Authentication:LinkedIn:ClientId"];
               options.ClientSecret = configuration["Authentication:LinkedIn:ClientSecret"];
               options.ResponseType = "code";
               options.Scope.Add("openid");
               options.Scope.Add("profile");
               options.Scope.Add("email");
               options.SaveTokens = true;
               options.SkipUnrecognizedRequests = true;
               options.ProtocolValidator.RequireNonce = false;
               options.Events = new OpenIdConnectEvents
               {
                   OnAuthorizationCodeReceived = async context =>
                   {
                       // Remove the 'code_verifier' parameter
                       context.TokenEndpointRequest?.Parameters.Remove("code_verifier");
                       await Task.CompletedTask;
                   }
               };
           });
    }

    internal static AuthorizationBuilder AddCvAuthorization(this IServiceCollection services)
    {
        return services.AddAuthorizationBuilder()
                .SetFallbackPolicy(new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser()
                    .Build());
    }
}
