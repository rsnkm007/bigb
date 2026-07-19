import "./MyOrders.css";

import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function MyOrders() {

    const { orders } = useContext(OrderContext);

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

                                key={order.orderId}

                                className="order-card"

                            >

                                <div className="order-header">

                                    <h2>

                                        Order ID

                                    </h2>

                                    <span>

                                        {order.orderId}

                                    </span>

                                </div>

                                <p>

                                    <strong>Status :</strong> {order.status}

                                </p>

                                <p>

                                    <strong>Date :</strong> {order.date}

                                </p>

                                <p>

                                    <strong>Total :</strong> ₹{order.amount}

                                </p>

                                <h3>

                                    Products

                                </h3>

                                {

                                    order.products.map(product => (

                                        <div

                                            key={`${product.category}-${product.id}`}

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

                                                    ₹{product.offer_price}

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