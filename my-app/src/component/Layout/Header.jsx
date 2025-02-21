import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-between p-2 max-w-6xl w-full mx-auto text-lg cursor-pointer">
      <Link to={"/"}>Rainy days</Link>
      <nav className="flex gap-2 text-blue-600">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}
