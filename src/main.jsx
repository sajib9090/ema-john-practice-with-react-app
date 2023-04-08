import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Login from "./components/Login/Login";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import customProductsLoader from "./CustomData/customProductsLoader";
import Checkout from "./components/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop/>,
      },
      {
        path: "orders",
        element: <Orders/>,
        loader: () => customProductsLoader(),
      },
      {
        path: "manage-inventory",
        element: <ManageInventory/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "checkout",
        element: <Checkout/>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
