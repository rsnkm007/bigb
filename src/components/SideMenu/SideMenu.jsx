import "./SideMenu.css";

import { Link } from "react-router-dom";

import {

    FaTimes,

    FaHome,

    FaBoxOpen,

    FaHeart,

    FaShoppingCart,

    FaBell,

    FaCog,

    FaQuestionCircle,

    FaInfoCircle,

    FaSignOutAlt

} from "react-icons/fa";

function SideMenu({

    isOpen,

    onClose,

    onLogout

}) {

    return (

        <>

            <div

                className={`menu-overlay ${isOpen ? "show" : ""

                    }`}

                onClick={onClose}

            ></div>

            <aside

                className={`side-menu ${isOpen ? "open" : ""

                    }`}

            >

                <div className="menu-header">

                    <h2>BigB</h2>

                    <FaTimes

                        className="close-icon"

                        onClick={onClose}

                    />

                </div>

                <nav>

                    <Link to="/account" onClick={onClose}>

                        <FaHome />

                        Account

                    </Link>

                    <Link to="/home" onClick={onClose}>

                        <FaHome />

                        Home

                    </Link>

                    <Link

                        to="/more-categories"

                        onClick={onClose}

                    >

                        <FaBoxOpen />

                        Categories

                    </Link>

                    <Link

                        to="/orders"

                        onClick={onClose}

                    >

                        <FaBoxOpen />

                        My Orders

                    </Link>

                    <Link

                        to="/wishlist"

                        onClick={onClose}

                    >

                        <FaHeart />

                        Wishlist

                    </Link>

                    <Link

                        to="/cart"

                        onClick={onClose}

                    >

                        <FaShoppingCart />

                        Cart

                    </Link>

                    <Link

                        to="/notifications"

                        onClick={onClose}

                    >

                        <FaBell />

                        Notifications

                    </Link>

                    <Link

                        to="#"

                        onClick={onClose}

                    >

                        <FaCog />

                        Settings

                    </Link>

                    <Link

                        to="/help-support"

                        onClick={onClose}

                    >

                        <FaQuestionCircle />

                        Help

                    </Link>

                    <Link

                        to="/about"

                        onClick={onClose}

                    >

                        <FaInfoCircle />

                        About

                    </Link>

                </nav>

                <button

                    className="logout-btn"

                    onClick={onLogout}

                >

                    <FaSignOutAlt />

                    Logout

                </button>

            </aside>

        </>

    );

}

export default SideMenu;