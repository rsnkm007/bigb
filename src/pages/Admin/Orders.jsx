import "./Orders.css";

import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import adminApi from "../../api/adminApi";

import Sidebar from "../../components/Admin/Sidebar";
import Topbar from "../../components/Admin/Topbar";

function Orders() {

    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();

    const loadOrders = useCallback(async () => {

        try {

            const response = await adminApi.get("/admin/orders");

            setOrders(response.data);

        }

        catch (error) {

            console.error(error);

        }

    }, []);

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