import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-8">
      <main className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Product Manager
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          A simple place to add and manage products. Use the buttons below to add a new product or view the product list.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/add-product"
            className="inline-block border border-gray-300 font-serif text-gray-800 px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Add Product
          </Link>

          <Link
            href="/products"
            className="inline-block border border-gray-300 font-serif text-gray-800 px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            View Products
          </Link>
        </div>

       
      </main>
    </div>
  );
}
