import React from "react";
import { useCart } from "../../store"; // or wherever your store is

export function AddToCartButton({ product, size }) {
  // Access the store’s addToCart action
  const addToCart = useCart((state) => state.addToCart);

  const handleClick = () => {
    if (!size) {
      alert("Please select a size first!");
      return;
    }
    addToCart(product, size);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
    >
      Add to Cart
    </button>
  );
}
