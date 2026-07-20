import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WishlistProvider from "./context/WishlistProvider";
import CartProvider from "./context/CartProvider";
import AddressProvider from "./context/AddressProvider";
import OrderProvider from "./context/OrderProvider";
import SearchProvider from "./context/SearchProvider";
import NotificationProvider from "./context/NotificationProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
    <WishlistProvider>
      <CartProvider>

        <AddressProvider>

            <OrderProvider>
              <NotificationProvider>

                <App/>

                </NotificationProvider>

            </OrderProvider>

        </AddressProvider>

      </CartProvider>
    </WishlistProvider>
    </SearchProvider>
  </StrictMode>
);