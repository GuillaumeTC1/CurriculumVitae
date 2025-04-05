#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
# Install NodeJS
RUN apt-get update && \
    apt-get install -y ca-certificates curl gnupg && \
    mkdir -p /etc/apt/keyrings && \
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
ARG NODE_MAJOR=20
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list && \
    apt-get update && \
    apt-get install nodejs -y
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["curriculumvitae.client/nuget.config", "curriculumvitae.client/"]
COPY ["CurriculumVitae.Server/CurriculumVitae.Server.csproj", "CurriculumVitae.Server/"]
COPY ["curriculumvitae.client/curriculumvitae.client.esproj", "curriculumvitae.client/"]
RUN dotnet restore "./CurriculumVitae.Server/CurriculumVitae.Server.csproj"
COPY . .
WORKDIR "/src/CurriculumVitae.Server"
RUN dotnet build "./CurriculumVitae.Server.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./CurriculumVitae.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CurriculumVitae.Server.dll"]