import { useState, useEffect } from "react";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
    });

    return unsubscribe;
  }, []);

  return loggedIn
    ? <Home />
    : <Login setLoggedIn={setLoggedIn} />;
}

export default App;