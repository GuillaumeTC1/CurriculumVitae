FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS base
USER app
WORKDIR /app
EXPOSE 8081

FROM node:20 AS client-build
WORKDIR /src
COPY . .
WORKDIR "/src/curriculumvitae.client"
RUN npm ci \
    npm run build

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS server-build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY . .
WORKDIR "/src/CurriculumVitae.Server"
RUN dotnet build "./CurriculumVitae.Server.csproj" -c $BUILD_CONFIGURATION -o /app/build
RUN dotnet publish "./CurriculumVitae.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=server-build /app/publish .
COPY --from=client-build /src/CurriculumVitae.Server/wwwroot /wwwroot
ENTRYPOINT ["dotnet", "CurriculumVitae.Server.dll"]