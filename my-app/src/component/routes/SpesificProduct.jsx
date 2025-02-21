import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../store";
import { AddToCartButton } from "../Buttons/AddToCartButton";

export function SpecificProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  const url = "https://v2.api.noroff.dev/rainy-days/";

  useEffect(() => {
    async function getProduct() {
      const res = await fetch(url + id);
      const data = await res.json();
      setProduct(data.data);
    }
    getProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const sizes = product.sizes || ["S", "M", "L", "XL"];

  return (
    <div>
      <img src={product.image.url} alt={product.image.alt} className="h-64" />
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

      <label htmlFor="sizeSelect" className="block mt-4 mb-1 font-semibold">
        Choose a size:
      </label>
      <select
        id="sizeSelect"
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
        className="border p-1"
      >
        <option value="">--Select--</option>
        {sizes.map((sz) => (
          <option key={sz} value={sz}>
            {sz}
          </option>
        ))}
      </select>

      {/* Use your new AddToCartButton */}
      <AddToCartButton product={product} size={selectedSize} />
    </div>
  );
}

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// export function SpecificProduct() {
//   const { id } = useParams();
//   console.log(id);
//   const [product, setProduct] = useState(false);

//   const url = "https://v2.api.noroff.dev/rainy-days/";

//   console.log(url + id);

//   useEffect(() => {
//     async function getProduct() {
//       const res = await fetch(url + id);
//       const data = await res.json();
//       console.log(data);
//       setProduct(data.data);
//     }
//     getProduct();
//   }, []);

//   return (
//     <>
//       <h1>Specific</h1>
//       {product ? (
//         <div>
//           <img
//             src={product.image.url}
//             alt={product.image.alt}
//             className="h-64"
//           />
//           <h2>{product.title}</h2>
//           <p>{product.description}</p>
//           {product.onSale ? (
//             <>
//               <p className="line-through">{product.price}</p>
//               <p>{product.discountedPrice}</p>
//             </>
//           ) : (
//             <p>{product.price}</p>
//           )}
//         </div>
//       ) : (
//         <p>loading</p>
//       )}
//     </>
//   );
// }
