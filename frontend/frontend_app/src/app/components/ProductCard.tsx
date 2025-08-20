interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  images?: string[];
}

export default function ProductCard({ product }: { product: Product }) {
const API_PORT = process.env.NEXT_PUBLIC_API_PORT;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container - Improved */}
      {product.images && product.images.length > 0 ? (
        <div className="relative w-full h-48 overflow-hidden bg-gray-50">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            style={{ aspectRatio: '16/9' }}
            onError={(e) => {
              // Resim yüklenemezse placeholder göster
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback placeholder */}
          <div className="absolute inset-0 hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          {product.images.length > 1 && (
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
              +{product.images.length - 1} more
            </div>
          )}
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z"/>
          </svg>
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        
        {product.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">₺{product.price}</span>
          </div>
        </div>
        
        {/* Additional Images Preview - Improved */}
        {product.images && product.images.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {product.images.slice(1, 4).map((img, idx) => (
              <div key={idx + 1} className="relative w-12 h-12 flex-shrink-0">
                <img
                  src={img}
                  alt={`${product.name} ${idx + 2}`}
                  className="w-full h-full object-cover rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors cursor-pointer"
                  onError={(e) => {
                    // Mini resim yüklenemezse gizle
                    const target = e.target as HTMLImageElement;
                    target.parentElement!.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}