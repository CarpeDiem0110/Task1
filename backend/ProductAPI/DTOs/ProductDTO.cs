namespace ProductAPI.DTOs;

public class ProductDTO
{
    public string Name { get; set; } = null!;
    public decimal Price { get; set; }
    public string? Description { get; set; }
    // Images as a list of URLs
    public List<string>? Images { get; set; }
}

