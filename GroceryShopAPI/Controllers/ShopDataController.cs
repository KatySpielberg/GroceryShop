using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using GroceryShopAPI.Models;

namespace GroceryShopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopDataController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetData(string startDate, string endDate)
        {
            try
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "mockData.json");
                var jsonData = System.IO.File.ReadAllText(filePath);
                var data = JsonConvert.DeserializeObject<List<ShopData>>(jsonData);

                DateTime start = DateTime.Parse(startDate);
                DateTime end = DateTime.Parse(endDate);

                var filteredData = data.FindAll(d => d.Date >= start && d.Date <= end);

                var responseData = filteredData.Select(d => new
                {
                    d.Id,
                    Date = d.Date.ToUniversalTime(), 
                    d.Income,
                    d.Outcome,
                    Revenue = d.Income - d.Outcome // Revenue Calculation
                }).ToList();

                return Ok(responseData);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Error processing data", details = ex.Message });
            }
        }
    }
}