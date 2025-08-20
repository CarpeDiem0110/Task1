using ProductAPI.DTOs;
using ProductAPI.Models;
using ProductAPI.Repositories;

namespace ProductAPI.Services;

public class ProductService
{
    private readonly ProductRepository _repository;

    public ProductService(ProductRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<Product>> GetProductsAsync()
    {
        return await _repository.GetAllAsync();
    }

    public async Task<Product> AddProductAsync(ProductDTO dto)
    {
        var product = new Product
        {
            Name = dto.Name,
            Price = dto.Price,
            Description = dto.Description,
            Images = dto.Images ?? new List<string>()
        };
        return await _repository.AddAsync(product);
    }
}


