import ProductForm from "../components/ProductForm";

export default function AddProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-16 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Add New Product</h1>
          <p className="text-lg text-gray-600">
            Fill out the form below to add a new product to your catalog
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <ProductForm />
        </div>
      </div>
    </div>
  );
}
