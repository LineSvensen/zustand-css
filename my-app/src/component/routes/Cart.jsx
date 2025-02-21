import { useCart } from "../../store";
import { RemoveFromCartButton, DecrementButton } from "../Buttons";

export function Cart() {
  const cartItems = useCart((state) => state.cart);
  const decrementItem = useCart((state) => state.decrementItem);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2>Your cart is empty :( </h2>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li
            key={`${item.id}-${item.size}`}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <img
                src={item.image}
                alt={item.alt}
                className="h-16 inline-block mr-4"
              />
              <span className="font-semibold">{item.title}</span> | Size:{" "}
              <span className="italic">{item.size}</span> | Price: {item.price}{" "}
              | Quantity: {item.quantity}
            </div>

            <div className="flex gap-2">
              <DecrementButton productId={item.id} size={item.size} />
              <RemoveFromCartButton productId={item.id} size={item.size} />
            </div>
          </li>
        ))}
      </ul>
      <div className="font-bold mt-4">Total: {totalPrice.toFixed(2)}</div>
    </div>
  );
}
