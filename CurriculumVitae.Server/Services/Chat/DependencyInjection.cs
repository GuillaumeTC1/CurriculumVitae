using Microsoft.SemanticKernel;

namespace CurriculumVitae.Server.Services.Chat;

internal static class DependencyInjection
{
    internal static IServiceCollection AddChatServices(this IServiceCollection services, IConfiguration configuration)
    {
        //services.AddTransient(sp => new Kernel(sp));

        services.Configure<OpenAiServiceOptions>(configuration.GetSection("OpenAI"))
            .AddSingleton<IChatService, ChatService>();

        return services;
    }
}
