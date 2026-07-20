import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import SearchContext from "../../context/SearchContext";
import SideMenu from "../SideMenu/SideMenu";

import { signOut } from "firebase/auth";

import { auth } from "../../firebase/firebase";
import { NotificationContext } from "../../context/NotificationContext";

import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import "./Header.css";

function Header() {
  const { wishlist } = useContext(WishlistContext);
  const { totalItems } = useContext(CartContext);
  const [keyword, setKeyword] = useState("");
  const { setSearchTerm } = useContext(SearchContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {

    const value = keyword.trim();

    if (!value) return;

    setSearchTerm(value);

    navigate(`/search/${encodeURIComponent(value)}`);

  };
  const handleLogout = async () => {

    await signOut(auth);

    setMenuOpen(false);

  };

  const { notifications } = useContext(NotificationContext);

  const unreadCount = notifications.filter(

    notification => !notification.read

  ).length;
  return (
    <>
      <header className="header">

        <div className="header-left">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <div className="search-input">
              <input
                type="text"
                placeholder="Search BigB.in"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {

                  if (e.key === "Enter") {

                    handleSearch();

                  }

                }}
              />
              <button onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="header-middle">

          <Link
            to="/"
            className="header-logo-link"
          >
            <h1>Welcome to BigB</h1>
          </Link>

        </div>

        <div className="header-right">
          <Link
            to="/account"
            className="header-right-item">
            <FaUserCircle className="icons" />

            <div>Account</div>

          </Link>
          <Link
            to="/cart"
            className="header-right-item wishlist-link"
          >

            <div className="wishlist-icon-container">

              <FaShoppingCart className="icons" />

              {

                totalItems > 0 &&

                <span className="wishlist-count">

                  {totalItems}

                </span>

              }

            </div>

            <div>Cart</div>

          </Link>

          <Link
            to="/wishlist"
            className="header-right-item wishlist-link"
          >

            <div className="wishlist-icon-container">

              <FaHeart className="icons" />

              {
                wishlist.length > 0 &&

                <span className="wishlist-count">

                  {wishlist.length}

                </span>

              }

            </div>

            <div>Wishlist</div>

          </Link>

          <Link

            to="/notifications"

            className="header-right-item wishlist-link"

          >

            <div className="wishlist-icon-container">

              <FaBell className="icons" />

              {

                unreadCount > 0 &&

                <span className="wishlist-count">

                  {unreadCount}

                </span>

              }

            </div>

            <div>Notifications</div>

          </Link>
          <div
            className="header-right-item"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars className="icons" />
            <div>Menu</div>
          </div>
        </div>

      </header >
      <SideMenu

        isOpen={menuOpen}

        onClose={() => setMenuOpen(false)}

        onLogout={handleLogout}

      />
    </>
  );
}

export default Header;