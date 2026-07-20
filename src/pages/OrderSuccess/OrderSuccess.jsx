import "./OrderSuccess.css";

import { Link } from "react-router-dom";
import { useEffect, useRef, useContext } from "react";

import { NotificationContext } from "../../context/NotificationContext";

function OrderSuccess() {

    const { addNotification } = useContext(NotificationContext);

    const hasAddedNotification = useRef(false);

    useEffect(() => {

        if (hasAddedNotification.current) return;

        hasAddedNotification.current = true;

        addNotification("🎉 Your order has been placed successfully.");

    }, [addNotification]);

    return (

        <div className="success-container">

            <div className="success-card">

                <div className="success-icon">
                    ✅
                </div>

                <h1>
                    Payment Successful
                </h1>

                <p>
                    Your order has been placed successfully.
                </p>

                <Link
                    to="/"
                    className="continue-btn"
                >
                    Continue Shopping
                </Link>

            </div>

        </div>

    );

}

export default OrderSuccess;