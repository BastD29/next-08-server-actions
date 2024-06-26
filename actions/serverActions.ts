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

const getProduct = async (id: string) => {
  const res = await fetch(
    `https://661fe72416358961cd95dce3.mockapi.io/products/${id}`,
    {
      cache: "no-cache",
    }
  );

  const product: Product = await res.json();

  return product;
};

const addProduct = async (data: FormData) => {
  const product = data.get("product")?.toString();
  const price = data.get("price")?.toString();

  if (!product || !price) return;

  const newProduct: Omit<Product, "id"> = {
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

const deleteProduct = async (id: string) => {
  await fetch(`https://661fe72416358961cd95dce3.mockapi.io/products/${id}`, {
    method: "DELETE",
  });

  revalidateTag("products");
};

const updateProduct = async (id: string, data: FormData) => {
  const product = data.get("product")?.toString();
  const price = data.get("price")?.toString();

  if (!product || !price) return;

  const updatedProduct: Omit<Product, "id"> = {
    product,
    price,
  };

  await fetch(`https://661fe72416358961cd95dce3.mockapi.io/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("products");
};

export { getProducts, getProduct, addProduct, deleteProduct, updateProduct };
