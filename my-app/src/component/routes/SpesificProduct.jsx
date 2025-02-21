import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export function SpecificProduct() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(false);

  const url = "https://v2.api.noroff.dev/rainy-days/";

  console.log(url + id);

  useEffect(() => {
    async function getProduct() {
      const res = await fetch(url + id);
      const data = await res.json();
      console.log(data);
      setProduct(data.data);
    }
    getProduct();
  }, []);

  return (
    <>
      <h1>Specific</h1>
      {product ? (
        <div>
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="h-64"
          />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {product.onSale ? (
            <>
              <p className="line-through">{product.price}</p>
              <p>{product.discountedPrice}</p>
            </>
          ) : (
            <p>{product.price}</p>
          )}
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
