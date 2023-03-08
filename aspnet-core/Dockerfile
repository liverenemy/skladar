FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

WORKDIR /src
COPY ["src/skladar.Web.Host/skladar.Web.Host.csproj", "src/skladar.Web.Host/"]
COPY ["src/skladar.Web.Core/skladar.Web.Core.csproj", "src/skladar.Web.Core/"]
COPY ["src/skladar.Application/skladar.Application.csproj", "src/skladar.Application/"]
COPY ["src/skladar.Core/skladar.Core.csproj", "src/skladar.Core/"]
COPY ["src/skladar.EntityFrameworkCore/skladar.EntityFrameworkCore.csproj", "src/skladar.EntityFrameworkCore/"]
WORKDIR "/src/src/skladar.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/skladar.Web.Host", "src/skladar.Web.Host"]
COPY ["src/skladar.Web.Core", "src/skladar.Web.Core"]
COPY ["src/skladar.Application", "src/skladar.Application"]
COPY ["src/skladar.Core", "src/skladar.Core"]
COPY ["src/skladar.EntityFrameworkCore", "src/skladar.EntityFrameworkCore"]
WORKDIR "/src/src/skladar.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:6.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "skladar.Web.Host.dll"]
