import "./Account.css";

import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";

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

import { useNavigate } from "react-router-dom";

function Account() {

  const navigate = useNavigate();

  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleGoogleLogin = () => {
    navigate("/");
  };

  return (

    <div className="account-page">

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

        <div className="menu-item">
          <FaBoxOpen />
          <span>My Orders</span>
        </div>

        <div className="menu-item">
          <FaHeart />
          <span>Wishlist</span>
        </div>

        <div className="menu-item">
          <FaMapMarkerAlt />
          <span>Saved Addresses</span>
        </div>

        <div className="menu-item">
          <FaCreditCard />
          <span>Payment Methods</span>
        </div>

        <div className="menu-item">
          <FaBell />
          <span>Notifications</span>
        </div>

        <div className="menu-item">
          <FaCog />
          <span>Settings</span>
        </div>

        <div className="menu-item">
          <FaQuestionCircle />
          <span>Help & Support</span>
        </div>

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