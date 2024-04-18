"use client";

import { deleteProduct } from "@/actions/serverActions";

interface DeleteProductButtonProps {
  productId: string; // Adding a prop for product ID
}

export default function DeleteProductButton({
  productId,
}: DeleteProductButtonProps) {
  return (
    <button
      onClick={() => deleteProduct(productId)}
      className="border bg-red-500 text-white p-2 rounded-md w-48"
    >
      Delete product
    </button>
  );
}
