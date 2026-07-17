import { useState, useEffect } from "react";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import MoreCategories from "./pages/MoreCategories/MoreCategories";


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
      <Routes>

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;