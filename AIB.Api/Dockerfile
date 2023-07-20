#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["AIB.Api/AIB.Api.csproj", "AIB.Api/"]
COPY ["AIB.Common/AIB.Common.csproj", "AIB.Common/"]
COPY ["AIB.Data/AIB.Data.csproj", "AIB.Data/"]
COPY ["AIB.Services/AIB.Services.csproj", "AIB.Services/"]
RUN dotnet restore "AIB.Api/AIB.Api.csproj"
COPY . .
WORKDIR "/src/AIB.Api"
RUN dotnet build "AIB.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AIB.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AIB.Api.dll"]