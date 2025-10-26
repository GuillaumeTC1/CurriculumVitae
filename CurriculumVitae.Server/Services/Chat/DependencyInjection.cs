using Microsoft.SemanticKernel;

namespace CurriculumVitae.Server.Services.Chat;

internal static class DependencyInjection
{
    internal static IServiceCollection AddChatServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped(serviceProvider => Kernel.Builder.Build());
        services.Configure<OpenAiServiceOptions>(configuration.GetSection("OpenAI"))
            .AddScoped<IChatService, ChatService>();

        return services;
    }
}
