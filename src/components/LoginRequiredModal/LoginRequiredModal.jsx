import "./LoginRequiredModal.css";

import { FaGoogle, FaTimes } from "react-icons/fa";

function LoginRequiredModal({ isOpen, onClose, onLogin }) {

    if (!isOpen) return null;

    return (

        <div className="login-modal-overlay">

            <div className="login-modal">

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    <FaTimes />
                </button>

                <h2>
                    Login Required
                </h2>

                <p>
                    Please sign in with your Google account to continue.
                </p>

                <div className="login-features">

                    <p>✔ Save Addresses</p>

                    <p>✔ Place Orders</p>

                    <p>✔ View Order History</p>

                    <p>✔ Save Wishlist</p>

                    <p>✔ Secure Payments</p>

                </div>

                <button
                    className="google-login-button"
                    onClick={onLogin}
                >
                    <FaGoogle />
                    Login with Google
                </button>

            </div>

        </div>

    );

}

export default LoginRequiredModal;