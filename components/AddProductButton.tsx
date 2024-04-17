"use client";

import { addProduct } from "@/actions/serverActions";
import { useTransition } from "react";

export default function AddProductButton() {
  // useTransition enables UI update at the same time thanks to isPending
  // ! careful, startTransition disables progressive enhancement
  //   const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append("product", "Macbook Pro");
  formData.append("price", "1299.99");

  return (
    <button
      //   onClick={() => startTransition(() => addProduct(formData))}
      onClick={() => addProduct(formData)}
      className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-48"
    >
      {/* {isPending ? "Adding..." : "Add Macbook Pro"} */}
      Add product
    </button>
  );
}
