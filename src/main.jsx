import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WishlistProvider from "./context/WishlistProvider";
import CartProvider from "./context/CartProvider";
import AddressProvider from "./context/AddressProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishlistProvider>
      <CartProvider>

        <AddressProvider>

            <App />

        </AddressProvider>

      </CartProvider>
    </WishlistProvider>
  </StrictMode>
);