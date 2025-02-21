// src/component/routes/CheckoutSuccess.jsx
import { useEffect } from "react";
import { useCart } from "../../store";

export function CheckoutSuccess() {
  const clearCart = useCart((state) => state.clearCart);

  useEffect(() => {
    // Optionally clear the cart after checkout
    clearCart();
  }, [clearCart]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Checkout Success!</h1>
      <p>Thank you for your purchase!</p>
    </div>
  );
}
