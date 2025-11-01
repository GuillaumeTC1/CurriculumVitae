namespace CurriculumVitae.Server.Services.Mail;

internal static class DependencyInjection
{
    internal static IServiceCollection AddMailServices(this IServiceCollection services, IConfiguration configuration)
    {
        return services.Configure<MailOptions>(configuration.GetSection("Mail"))
            .AddSingleton<IMailService, MailService>();
    }
}
