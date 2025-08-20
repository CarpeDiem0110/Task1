using Microsoft.AspNetCore.Mvc;
using ProductAPI.DTOs;
using ProductAPI.Services;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Linq;
using System;

namespace ProductAPI.Controllers;

// Form model for multipart form data
public class ProductFormModel
{
    public string Name { get; set; } = null!;
    public decimal Price { get; set; }
    public string? Description { get; set; }
    public List<IFormFile>? Files { get; set; }
}

[ApiController]
[Route("/product")]
public class ProductController : ControllerBase
{
    private readonly ProductService _service;
    private readonly IWebHostEnvironment _env;

    public ProductController(ProductService service, IWebHostEnvironment env)
    {
        _service = service;
        _env = env;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var products = await _service.GetProductsAsync();
        return Ok(products);
    }

    [HttpPost]
    [Consumes("multipart/form-data")]
    public async Task<IActionResult> Add([FromForm] ProductFormModel model)
    {
        // Handle file uploads
        var imageUrls = new List<string>();
        
        if (model.Files != null && model.Files.Any())
        {
            var allowedExt = new[] { ".jpg", ".jpeg", ".png", ".webp" };
            var uploads = Path.Combine(_env.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot"), "uploads");
            Directory.CreateDirectory(uploads);
            
            foreach (var file in model.Files)
            {
                if (file.Length > 0)
                {
                    var ext = Path.GetExtension(file.FileName).ToLowerInvariant();
                    if (allowedExt.Contains(ext) && file.Length <= 5 * 1024 * 1024) // 5MB limit
                    {
                        var fileName = Guid.NewGuid().ToString() + ext;
                        var filePath = Path.Combine(uploads, fileName);

                        await using (var stream = System.IO.File.Create(filePath))
                        {
                            await file.CopyToAsync(stream);
                        }

                        
                        DotNetEnv.Env.Load();
                        var apiPort = Environment.GetEnvironmentVariable("API_PORT");
                        var imageUrl = $"http://localhost:{apiPort}/uploads/{fileName}";

                        
                        imageUrls.Add(imageUrl);
                    }
                }
            }
        }
        
        // Create DTO
        var dto = new ProductDTO
        {
            Name = model.Name,
            Price = model.Price,
            Description = model.Description,
            Images = imageUrls
        };
        
        var product = await _service.AddProductAsync(dto);
        return CreatedAtAction(nameof(GetAll), new { id = product.Id }, product);
    }
}

