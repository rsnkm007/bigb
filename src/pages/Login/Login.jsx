import "./Login.css";

import { auth, provider } from "../../firebase/firebase";

import {
  signInWithPopup,
  signInAnonymously,
} from "firebase/auth";

function Login({ setLoggedIn }) {

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const guestLogin = async () => {
    try {
      await signInAnonymously(auth);
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>BigB</h1>

        <p>Welcome Back</p>

        <button
          className="google-btn"
          onClick={googleLogin}
        >
          Login with Google
        </button>

        <button
          className="guest-btn"
          onClick={guestLogin}
        >
          Continue as Guest
        </button>

      </div>

    </div>
  );
}

export default Login;