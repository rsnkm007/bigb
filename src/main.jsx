import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WishlistProvider from "./context/WishlistProvider";
import CartProvider from "./context/CartProvider";
import AddressProvider from "./context/AddressProvider";
import OrderProvider from "./context/OrderProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishlistProvider>
      <CartProvider>

        <AddressProvider>

            <OrderProvider>

                <App/>

            </OrderProvider>

        </AddressProvider>

      </CartProvider>
    </WishlistProvider>
  </StrictMode>
);