import "./Sidebar.css";

import {
    FaTachometerAlt,
    FaBoxOpen,
    FaShoppingCart,
    FaUsers,
    FaSignOutAlt
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {

    return (

        <div className="sidebar">

            <h2 className="sidebar-logo">
                BIGB ADMIN
            </h2>

            <NavLink to="/admin/dashboard">
                <FaTachometerAlt />
                Dashboard
            </NavLink>

            <NavLink to="/admin/products">
                <FaBoxOpen />
                Products
            </NavLink>

            <NavLink to="/admin/orders">
                <FaShoppingCart />
                Orders
            </NavLink>

            <NavLink to="/admin/users">
                <FaUsers />
                Users
            </NavLink>

            <NavLink to="/admin">
                <FaSignOutAlt />
                Logout
            </NavLink>

        </div>

    );

}

export default Sidebar;