import { Link } from "react-router-dom";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

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
  return (
    <>
      <header className="header">

        <div className="header-left">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <div className="search-input">
              <input type="text" placeholder="Search BigB.in" />
              <button>Search</button>
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

          <div className='header-right-item'>
            <FaBell className='icons' />
            <div>Notifications</div>
          </div>
          <div className='header-right-item'>
            <FaBars className='icons' />
            <div>Menu</div>
          </div>
        </div>

      </header >
    </>
  );
}

export default Header;