using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;

namespace GroceryShopAPI.Filters 
{
    public class SwaggerDateFormatFilter : ISchemaFilter
    {
        public void Apply(OpenApiSchema schema, SchemaFilterContext context)
        {
            if (context.Type == typeof(DateTime)) // Check if the type is DateTime
            {
                // Set the date format example in the Swagger UI
                schema.Example = new OpenApiString("yyyy-MM-dd"); // Example format for DateTime
            }
        }
    }
}