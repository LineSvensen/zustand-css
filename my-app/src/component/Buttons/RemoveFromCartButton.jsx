import React from "react";
import { useCart } from "../../store";

export function RemoveFromCartButton({ productId, size }) {
  const removeFromCart = useCart((state) => state.removeFromCart);

  return (
    <button
      onClick={() => removeFromCart(productId, size)}
      className="bg-red-500 text-white px-2 py-1 rounded"
    >
      Remove
    </button>
  );
}
