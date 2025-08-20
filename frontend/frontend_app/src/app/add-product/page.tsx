import ProductForm from "../components/ProductForm";

export default function AddProductPage() {
  return (
    <div className="p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Product</h1>
        <ProductForm />
      </div>
    </div>
  );
}
