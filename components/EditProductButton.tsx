"use client";

import { useRouter } from "next/navigation";

interface EditProductButtonProps {
  productId: string; // Adding a prop for product ID
}

export default function EditProductButton({
  productId,
}: EditProductButtonProps) {
  const router = useRouter();

  return (
    <button
      //   onClick={() => updateProduct(productId)}
      onClick={() => router.push(`/products/${productId}`)}
      className="border bg-slate-500 text-white p-2 rounded-md w-48"
    >
      Edit
    </button>
  );
}
