using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ProductAPI.Models;

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public decimal Price { get; set; }
    public string? Description { get; set; }

    // Stored in DB as JSON text; mapped to Images convenience property in code
    [JsonIgnore]
    public string? ImagesJson { get; set; }

    // EF should NOT map this property as a separate column; ImagesJson stores the JSON.
    [NotMapped]
    public List<string> Images
    {
        get => string.IsNullOrWhiteSpace(ImagesJson) ? new List<string>() : System.Text.Json.JsonSerializer.Deserialize<List<string>>(ImagesJson) ?? new List<string>();
        set => ImagesJson = System.Text.Json.JsonSerializer.Serialize(value ?? new List<string>());
    }
}
