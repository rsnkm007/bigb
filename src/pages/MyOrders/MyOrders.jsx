import "./MyOrders.css";

import { useContext, useEffect, useState } from "react";

import { OrderContext } from "../../context/OrderContext";
import orderApi from "../../api/orderApi";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function MyOrders() {

    const {

    orders,

    loadOrders

} = useContext(OrderContext);

    const [orderItems, setOrderItems] = useState({});

    useEffect(() => {

    loadOrders();

}, [loadOrders]);

    useEffect(() => {

        const loadItems = async () => {

            const items = {};

            for (const order of orders) {

                const response = await orderApi.get(

                    `/orders/items/${order.id}`

                );

                items[order.id] = response.data;

            }

            setOrderItems(items);

        };

        if (orders.length > 0) {

            loadItems();

        }

    }, [orders]);

    return (

        <>

            <Header />

            <div className="orders-page">

                <h1>My Orders</h1>

                {

                    orders.length === 0 ?

                        (

                            <div className="empty-orders">

                                <h2>No Orders Yet</h2>

                                <p>

                                    Start shopping to place your first order.

                                </p>

                            </div>

                        )

                        :

                        (

                            orders.map(order => (

                                <div

                                    key={order.id}

                                    className="order-card"

                                >

                                    <div className="order-header">

                                        <h2>

                                            Order #{order.id}

                                        </h2>

                                    </div>

                                    <p>

                                        <strong>Status :</strong>

                                        {" "}

                                        {order.order_status}

                                    </p>

                                    <p>

                                        <strong>Payment :</strong>

                                        {" "}

                                        {order.payment_status}

                                    </p>

                                    <p>

                                        <strong>Total :</strong>

                                        {" "}

                                        ₹{order.total_amount}

                                    </p>

                                    <p>

                                        <strong>Date :</strong>

                                        {" "}

                                        {

                                            new Date(

                                                order.created_at

                                            ).toLocaleString()

                                        }

                                    </p>

                                    <h3>

                                        Products

                                    </h3>

                                    {

                                        orderItems[order.id]?.map(product => (

                                            <div

                                                key={product.id}

                                                className="order-product"

                                            >

                                                <img

                                                    src={product.image}

                                                    alt={product.name}

                                                />

                                                <div>

                                                    <h4>

                                                        {product.name}

                                                    </h4>

                                                    <p>

                                                        Qty : {product.quantity}

                                                    </p>

                                                    <p>

                                                        ₹{product.price}

                                                    </p>

                                                </div>

                                            </div>

                                        ))

                                    }

                                </div>

                            ))

                        )

                }

            </div>

            <Footer />

        </>

    );

}

export default MyOrders;