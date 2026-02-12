using Scalar.AspNetCore;
using System.Diagnostics;

namespace CurriculumVitae.Server;

internal static class DebugExtensions
{
    [Conditional("DEBUG")]
    public static void MapOpenApiExplorerUI(this WebApplication app)
    {
        app.MapScalarApiReference(options => options.OpenApiRoutePattern = "openapi/v1.json");
    }
}
