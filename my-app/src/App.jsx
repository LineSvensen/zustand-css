import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./component/Layout";
import { Products } from "./component/routes/Products";
import { SpecificProduct } from "./component/routes/SpesificProduct";
import { Cart } from "./component/routes/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <h1>Helloooooo</h1>,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <SpecificProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
