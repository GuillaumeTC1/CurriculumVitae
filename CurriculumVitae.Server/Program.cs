using CurriculumVitae.Server.Identity;
using CurriculumVitae.Server.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddLinkedInAuthentication();
builder.Services.AddCvAuthorization();

//builder.Services.AddHttpClient();

builder.Services.AddScoped<IInfoService, InfoService>();

builder.Services.AddRouting(options => options.LowercaseUrls = true);
builder.Services.AddControllers();

var app = builder.Build();

app.UseHsts();
app.UseHttpsRedirection();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
