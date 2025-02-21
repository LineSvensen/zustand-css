import React from "react";
import { useCart } from "../../store";

export function DecrementButton({ productId, size }) {
  const decrementItem = useCart((state) => state.decrementItem);

  const handleClick = () => {
    decrementItem(productId, size);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-yellow-500 text-white px-2 py-1 rounded"
    >
      -
    </button>
  );
}
