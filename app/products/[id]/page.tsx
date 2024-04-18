// "use client";

import { getProduct, updateProduct } from "@/actions/serverActions";

export default async function Product({ params }: { params: { id: string } }) {
  // console.log("params:", params);

  const product = await getProduct(params.id);

  return (
    <main>
      <h2>{product.product}</h2>
      {/* <form
        action={updateProduct}
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
          Edit Product
        </button>
      </form> */}
    </main>
  );
}
