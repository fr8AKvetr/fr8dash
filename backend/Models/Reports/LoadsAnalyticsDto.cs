using System;
using System.Collections.Generic;

namespace Logistics.Application.Models.Reports;

public class LoadsAnalyticsDto
{
    public LoadsOverviewDto Overview { get; set; } = null!;
    public ChartDataDto ChartData { get; set; } = null!;
    public RegionalDataDto RegionalData { get; set; } = null!;
    public List<ActivityDto> RecentActivity { get; set; } = new();
}

public class LoadsOverviewDto
{
    public decimal TotalRevenue { get; set; }
    public decimal RevenueChange { get; set; }
    public int TotalLoads { get; set; }
    public decimal LoadsChange { get; set; }
    public decimal AverageLoadValue { get; set; }
    public decimal AverageValueChange { get; set; }
}

public class ChartDataDto
{
    public List<string> Labels { get; set; } = new();
    public List<decimal> Revenue { get; set; } = new();
    public List<int> LoadCounts { get; set; } = new();
}

public class RegionalDataDto
{
    public List<RegionDto> TopRegions { get; set; } = new();
    public List<MapPointDto> MapPoints { get; set; } = new();
}

public class RegionDto
{
    public string Name { get; set; } = string.Empty;
    public int LoadCount { get; set; }
    public decimal Revenue { get; set; }
    public decimal Percentage { get; set; }
}

public class MapPointDto
{
    public string Region { get; set; } = string.Empty;
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public int LoadCount { get; set; }
}

public class ActivityDto
{
    public string Type { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTime Timestamp { get; set; }
}
