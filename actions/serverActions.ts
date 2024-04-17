"use server";

import { Product } from "@/typings";
import { revalidateTag } from "next/cache";

const getProducts = async () => {
  const res = await fetch(
    "https://661fe72416358961cd95dce3.mockapi.io/products",
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );

  const products: Product[] = await res.json();

  return products;
};

const addProduct = async (data: FormData) => {
  const product = data.get("product")?.toString();
  const price = data.get("price")?.toString();

  if (!product || !price) return;

  const newProduct: Product = {
    product,
    price,
  };

  await fetch("https://661fe72416358961cd95dce3.mockapi.io/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("products");
};

export { getProducts, addProduct };
