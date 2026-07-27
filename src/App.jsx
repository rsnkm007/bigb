import { useState, useEffect } from "react";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import MyOrders from "./pages/MyOrders/MyOrders";


import About from "./pages/About/About";
import Team from "./pages/Team/Team";
import Careers from "./pages/Careers/Careers";
import Blog from "./pages/Blog/Blog";

import Terms from "./pages/Terms/Tems";
import Refund from "./pages/RefundPolicy/RefundPolicy";
import Privacy from "./pages/PrivacyPolicy/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy/CookiesPolicy";


import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import MoreCategories from "./pages/MoreCategories/MoreCategories";
import Account from "./pages/Account/Account";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import Search from "./pages/Search/Search";
import Notifications from "./pages/Notifications/Notifications";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Address from "./pages/Address/Address";
import HelpSupport from "./pages/HelpSupport/HelpSupport";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Products from "./pages/Admin/Products";
import Orders from "./pages/Admin/Orders";
import OrderDetails from "./pages/Admin/OrderDetails";
import Users from "./pages/Admin/Users";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
    });

    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route
          path="/account"
          element={
            loggedIn
              ? <Account />
              : <Navigate to="/" />
          }
        />

        <Route

          path="/orders"

          element={

            loggedIn

              ?

              <MyOrders />

              :

              <Navigate to="/" />

          }

        />

        <Route
          path="/cart"
          element={
            loggedIn
              ? <Cart />
              : <Navigate to="/" />
          }
        />

        <Route
          path="/wishlist"
          element={
            loggedIn
              ? <Wishlist />
              : <Navigate to="/" />
          }
        />

        {/* Login Page */}
        <Route
          path="/"
          element={
            loggedIn
              ? <Navigate to="/home" />
              : <Login setLoggedIn={setLoggedIn} />
          }
        />

        {/* Home Page */}
        <Route
          path="/home"
          element={
            loggedIn
              ? <Home />
              : <Navigate to="/" />
          }
        />

        {/* Category Page */}
        <Route
          path="/category/:categoryName"
          element={
            loggedIn
              ? <Category />
              : <Navigate to="/" />
          }
        />

        <Route
          path="/product/:category/:id"
          element={
            loggedIn
              ? <ProductDetails />
              : <Navigate to="/" />
          }
        />

        <Route
          path="/more-categories"
          element={
            loggedIn
              ? <MoreCategories />
              : <Navigate to="/" />
          }
        />

        <Route
          path="/checkout"
          element={
            loggedIn
              ? <Checkout />
              : <Navigate to="/" />
          }
        />

        <Route
          path="/payment"
          element={
            loggedIn
              ?

              <Payment />

              :

              <Navigate to="/" />
          }
        />

        <Route

          path="/order-success"

          element={

            loggedIn

              ?

              <OrderSuccess />

              :

              <Navigate to="/" />

          }

        />

        <Route
          path="/search/:keyword"
          element={<Search />}
        />

        <Route

          path="/notifications"

          element={<Notifications />}

        />

        <Route
          path="/address"
          element={<Address />}
        />

        <Route
          path="/help-support"
          element={<HelpSupport />}
        />

        <Route

          path="/admin"

          element={<AdminLogin />}

        />

        <Route

          path="/admin/dashboard"

          element={<AdminDashboard />}

        />

        <Route

          path="/admin/products"

          element={<Products />}

        />

        <Route path="/admin/orders" element={<Orders />} />


        <Route

          path="/admin/orders/:id"

          element={<OrderDetails />}

        />

        <Route path="/admin/users" element={<Users />} />

        <Route path="/about" element={<About />} />

        <Route path="/team" element={<Team />} />

        <Route path="/careers" element={<Careers />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="/refund" element={<Refund />} />

        <Route path="/privacy" element={<Privacy />} />

        <Route path="/cookies" element={<CookiesPolicy />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;