
interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
}
