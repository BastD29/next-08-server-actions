import { addProduct, getProducts } from "@/actions/serverActions";
import AddProductButton from "@/components/AddProductButton";
import DeleteProductButton from "@/components/DeleteProductButton";
import EditProductButton from "@/components/EditProductButton";
import Link from "next/link";

export default async function Products() {
  const products = await getProducts();

  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Products Warehouse</h1>

      <AddProductButton />

      <form
        action={addProduct}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="product"
          type="text"
          placeholder="Enter product name"
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          name="price"
          type="text"
          placeholder="Enter price"
          className="border border-gray-300 p-2 rounded-md"
        />
        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>

      <h2 className="font-bold p-5">List of products</h2>

      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div className="flex flex-col p-5 shadow" key={product.id}>
            <Link href={`/products/${encodeURIComponent(product.id)}`}>
              {product.product}
            </Link>
            <DeleteProductButton productId={product.id} />
            <EditProductButton productId={product.id} />
          </div>
        ))}
      </div>
    </main>
  );
}
