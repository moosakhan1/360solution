"use client";

import { useState } from "react";
import Button from "./component/Button";
import products from "./component/data";
import Navbar from "./component/Navbar";

export default function ProductList() {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  let filteredProducts;

  if (searchQuery) {
    filteredProducts = products.filter((product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (category === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  }

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <Button setCategory={setCategory} />
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-4">Products</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.productName}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-lg font-medium text-gray-800">
                  {product.productName}
                </p>
                <span className="text-sm text-gray-600">
                  {product.category}
                </span>
              </li>
            ))
          ) : (
            <p className="text-xl text-gray-500">No products found</p>
          )}
        </ul>
      </div>
    </>
  );
}
