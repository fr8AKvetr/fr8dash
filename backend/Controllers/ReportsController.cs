using Microsoft.AspNetCore.Mvc;
using Logistics.Application.Models.Reports;

namespace Logistics.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReportsController : ControllerBase
{
    [HttpGet("loads-analytics")]
    public ActionResult<LoadsAnalyticsDto> GetLoadsAnalytics()
    {
        var analytics = new LoadsAnalyticsDto
        {
            Overview = new LoadsOverviewDto
            {
                TotalRevenue = 1250000m,
                RevenueChange = 12.5m,
                TotalLoads = 342,
                LoadsChange = -3.2m,
                AverageLoadValue = 3654.97m,
                AverageValueChange = 8.1m
            },
            ChartData = new ChartDataDto
            {
                Labels = new List<string> { "Jan", "Feb", "Mar", "Apr", "May", "Jun" },
                Revenue = new List<decimal> { 980000m, 1020000m, 1100000m, 1150000m, 1200000m, 1250000m },
                LoadCounts = new List<int> { 298, 310, 325, 330, 338, 342 }
            },
            RegionalData = new RegionalDataDto
            {
                TopRegions = new List<RegionDto>
                {
                    new() { Name = "Texas", LoadCount = 89, Revenue = 325000m, Percentage = 26.0m },
                    new() { Name = "California", LoadCount = 67, Revenue = 280000m, Percentage = 22.4m }
                },
                MapPoints = new List<MapPointDto>
                {
                    new() { Region = "Dallas", Latitude = 32.7767, Longitude = -96.7970, LoadCount = 45 },
                    new() { Region = "Los Angeles", Latitude = 34.0522, Longitude = -118.2437, LoadCount = 38 }
                }
            },
            RecentActivity = new List<ActivityDto>
            {
                new() { Type = "Load Booked", Description = "Load #L23894 from Chicago to Dallas", Status = "Completed", Timestamp = DateTime.UtcNow.AddHours(-1) }
            }
        };

        return Ok(analytics);
    }
}
