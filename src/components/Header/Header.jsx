import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import "./Header.css";

function Header() {
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
          <h1>Welcome to BigB</h1>

        </div>

        <div className="header-right">
          <div className='header-right-item'>
            <FaUserCircle className='icons' />
            <div>Account</div>
          </div>
          <div className='header-right-item'>
            <FaShoppingCart className='icons' />
            <div>Cart</div>
          </div>
          <div className='header-right-item'>
            <FaHeart className='icons' />
            <div>Wishlist</div>
          </div>
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