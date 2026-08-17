import "./Orders.css";

import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import adminApi from "../../api/adminApi";

import Sidebar from "../../components/Admin/Sidebar";
import Topbar from "../../components/Admin/Topbar";

function Orders() {

    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [payment, setPayment] = useState("All");
    const [dateFilter, setDateFilter] = useState("All");

    const [fromDate, setFromDate] = useState("");

    const [toDate, setToDate] = useState("");

    const navigate = useNavigate();

    const loadOrders = useCallback(async () => {

        try {

            const response = await adminApi.get(

                "/admin/orders",

                {

                    params: {

                        search,

                        status,

                        payment,

                        dateFilter,

                        fromDate,

                        toDate

                    }

                }

            );

            setOrders(response.data);

        }

        catch (error) {

            console.error(error);

        }

    }, [

    search,

    status,

    payment,

    dateFilter,

    fromDate,

    toDate

]);

    useEffect(() => {

        loadOrders();

    }, [loadOrders]);



    return (

        <div className="admin-layout">

            <Sidebar />

            <div className="admin-main">

                <Topbar />

                <div className="orders-page">

                    <h1>Orders</h1>

                    <div className="order-filters">

                        <input
                            type="text"
                            placeholder="Search Customer..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option>All</option>
                            <option>Placed</option>
                            <option>Shipped</option>
                            <option>Delivered</option>
                            <option>Cancelled</option>
                        </select>

                        <select
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                        >
                            <option>All</option>
                            <option>Paid</option>
                            <option>Pending</option>
                            <option>Failed</option>
                        </select>

                        <select
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                        >
                            <option value="All">All Dates</option>
                            <option value="Today">Today</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Last7Days">Last 7 Days</option>
                            <option value="ThisMonth">This Month</option>
                            <option value="Custom">Custom Range</option>
                        </select>

                        {
                            dateFilter === "Custom" && (

                                <>

                                    <input
                                        type="date"
                                        value={fromDate}
                                        onChange={(e) => setFromDate(e.target.value)}
                                    />

                                    <input
                                        type="date"
                                        value={toDate}
                                        onChange={(e) => setToDate(e.target.value)}
                                    />

                                </>

                            )
                        }

                        <button
                            onClick={() => {

                                setSearch("");
                                setStatus("All");
                                setPayment("All");
                                setDateFilter("All");
                                setFromDate("");
                                setToDate("");

                            }}
                        >
                            Reset
                        </button>

                    </div>

                    <table>

                        <thead>

                            <tr>

                                <th>Order ID</th>

                                <th>Customer</th>

                                <th>Total</th>

                                <th>Payment</th>

                                <th>Status</th>

                                <th>Date</th>

                                <th>Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                orders.map(order => (

                                    <tr key={order.id}>

                                        <td>{order.id}</td>

                                        <td>{order.name}</td>

                                        <td>₹{order.total_amount}</td>

                                        <td>{order.payment_status}</td>

                                        <td>{order.order_status}</td>

                                        <td>

                                            {new Date(order.created_at).toLocaleDateString()}

                                        </td>

                                        <td>

                                            <button

                                                onClick={() =>

                                                    navigate(`/admin/orders/${order.id}`)

                                                }

                                            >

                                                View

                                            </button>

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default Orders;