import "./Login.css";

import shoppingHero from "../../assets/login.jpeg";
import productApi from "../../api/productApi";

import { auth, provider } from "../../firebase/firebase";

import {
    signInWithPopup,
    signInAnonymously
} from "firebase/auth";


function Login({ setLoggedIn }) {

    const googleLogin = async () => {

    try {

        const result = await signInWithPopup(auth, provider);

        await productApi.post("/users", {

    firebase_uid: result.user.uid,
    name: result.user.displayName,
    email: result.user.email,
    profile_image: result.user.photoURL,
    provider: "google"

});

        setLoggedIn(true);

    }

    catch (error) {

        console.error(error);

    }

};
const guestLogin = async () => {

    try {

        await signInAnonymously(auth);

        setLoggedIn(true);

    }

    catch (error) {

        console.log(error);

    }

};

    return (

        <div className="bigb-login-page">

            {/* Background Blobs */}

            <div className="bigb-bg-circle bigb-circle-1"></div>
            <div className="bigb-bg-circle bigb-circle-2"></div>
            <div className="bigb-bg-circle bigb-circle-3"></div>

            <div className="bigb-login-wrapper">

                {/* LEFT SIDE */}

                <section className="bigb-login-left">

                    <div className="bigb-login-card">

                        <div className="bigb-brand">

                            <div className="bigb-brand-logo">

                                🛍️

                            </div>

                            <div>

                                <h1>BigB</h1>

                                <span>

                                    Smart Shopping Starts Here

                                </span>

                            </div>

                        </div>

                        <div className="bigb-login-content">

                            <h2>

                                Welcome Back

                            </h2>

                            <p>

                                Discover millions of products,
                                amazing deals and fast delivery.

                                Shop Fashion, Electronics,
                                Home Essentials, Groceries
                                and much more.

                            </p>

                        </div>

                        <button

                            className="bigb-google-btn"

                            onClick={googleLogin}

                        >

                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 48 48"
                            >

                                <path
                                    fill="#FFC107"
                                    d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
                                />

                                <path
                                    fill="#FF3D00"
                                    d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
                                />

                                <path
                                    fill="#4CAF50"
                                    d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.6-3.1-11.3-7.6l-6.5 5C9.5 39.6 16.2 44 24 44z"
                                />

                                <path
                                    fill="#1976D2"
                                    d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.2C39.9 36.9 44 31 44 24c0-1.3-.1-2.7-.4-3.5z"
                                />

                            </svg>

                            Continue with Google

                        </button>

                        <button

                            className="bigb-guest-btn"

                            onClick={guestLogin}

                        >

                            Continue as Guest

                        </button>

                        <div className="bigb-login-features">

                            <div>✔ Secure Authentication</div>

                            <div>✔ Fast Checkout</div>

                            <div>✔ Trusted Payments</div>

                            <div>✔ Instant Order Tracking</div>

                        </div>

                        <p className="bigb-login-footer">

                            By continuing you agree to the
                            Terms of Service and Privacy Policy.

                        </p>

                    </div>

                </section>

                {/* RIGHT SIDE */}

                <section className="bigb-login-right">

                    <img

                        src={shoppingHero}

                        alt="Shopping"

                        className="bigb-login-image"

                    />

                    <div className="bigb-image-overlay"></div>

                    <div className="bigb-sale-card">

                        <span>BIGB FESTIVE SALE</span>

                        <h2>

                            UP TO

                            <br />

                            70% OFF

                        </h2>

                    </div>

                    <div className="bigb-rating-card">

                        <h3>

                            ★★★★★

                        </h3>

                        <p>

                            Trusted by

                            <strong>

                                {" "}10,000+

                            </strong>

                            <br />

                            Happy Customers

                        </p>

                    </div>

                    <div className="bigb-delivery-card">

                        🚚 Free Delivery

                    </div>

                </section>

            </div>

        </div>

    );

}

export default Login;