using CurriculumVitae.Server.Services.Chat.Mistral;
using CurriculumVitae.Server.Services.Chat.OpenAi;

namespace CurriculumVitae.Server.Services.Chat;

internal static class DependencyInjection
{
    internal static IServiceCollection AddChatServices(this IServiceCollection services, IConfiguration configuration)
    {
        services
            .Configure<OpenAiOptions>(configuration.GetSection("OpenAI"))
            .Configure<MistralOptions>(configuration.GetSection("Mistral"))
            .AddSingleton<IChatService, ChatService>();

        return services;
    }
}
