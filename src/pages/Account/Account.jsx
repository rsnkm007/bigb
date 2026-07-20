import "./Account.css";

import { auth, provider } from "../../firebase/firebase";
import { signOut, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import {
  FaUserCircle,
  FaBoxOpen,
  FaHeart,
  FaMapMarkerAlt,
  FaCreditCard,
  FaBell,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaGoogle
} from "react-icons/fa";

import Header from "../../components/Header/Header";

function Account() {

  const navigate = useNavigate();

  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleGoogleLogin = async () => {

    try {

      await signInWithPopup(auth, provider);

      navigate("/");

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="account-page">

      <Header />

      {/* Profile */}

      <div className="profile-card">

        {
          user?.photoURL ?

            <img
              src={user.photoURL}
              alt="Profile"
              className="profile-image"
            />

            :

            <FaUserCircle className="profile-icon" />

        }

        <div className="profile-details">

          {
            user?.isAnonymous ?

              <>
                <h2>Guest User</h2>

                <p>
                  You are browsing as a guest.
                </p>

                <button
                  className="google-login-btn"
                  onClick={handleGoogleLogin}
                >
                  <FaGoogle />
                  Login with Google
                </button>

              </>

              :

              <>
                <h2>{user.displayName}</h2>

                <p>{user.email}</p>
              </>
          }

        </div>

      </div>

      {/* Menu */}

      <div className="account-menu">

        <Link
          to="/orders"
          className="menu-item"
        >
          <FaBoxOpen />
          <span>My Orders</span>
        </Link>

        <Link to="/wishlist" className="menu-item">
          <FaHeart />
          <span>Wishlist</span>
        </Link>

        <Link
          to="/address"
          className="menu-item"
        >
          <FaMapMarkerAlt />
          <span>Saved Addresses</span>
        </Link>

        <div className="menu-item">
          <FaCreditCard />
          <span>Payment Methods</span>
        </div>

        <Link
          to="/notifications"
          className="menu-item"
        >
          <FaBell />
          <span>Notifications</span>
        </Link>

        <div className="menu-item">
          <FaCog />
          <span>Settings</span>
        </div>

        <Link
          to="/help-support"
          className="menu-item"
        >
          <FaQuestionCircle />
          <span>Help & Support</span>
        </Link>

      </div>

      {/* Logout */}

      <div className="logout-section">

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>

  );

}

export default Account;