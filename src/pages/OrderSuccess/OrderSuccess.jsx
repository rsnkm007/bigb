import "./OrderSuccess.css";

import { Link } from "react-router-dom";

function OrderSuccess() {

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