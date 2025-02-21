import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://v2.api.noroff.dev/rainy-days/";

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.data);
      setProducts(data.data);
    }
    getProducts();
  }, []);
  return (
    <>
      <h1 className="font-bold text-3xl">Products page</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => {
          return (
            <Link
              to={"/product/" + product.id}
              key={product.id}
              className="max-w-64 hover:shadow-xl rounded-lg p-2"
            >
              <img
                src={product.image.url}
                alt={product.image.alt}
                className="h-64"
              />
              <h2 className="font-bold text-2xl">{product.title}</h2>
              <p>{product.description}</p>
              {product.onSale ? (
                <>
                  <p className="line-through">{product.price}</p>
                  <p>{product.discountedPrice}</p>
                </>
              ) : (
                <p>{product.price}</p>
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
