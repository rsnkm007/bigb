import "./Payment.css";

import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { AddressContext } from "../../context/AddressContext";
import API from "../../api/paymentApi";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../context/OrderContext";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Payment() {

  const {

    cart,
    totalItems,
    totalMRP,
    totalDiscount,
    totalPrice,
    deliveryCharge,
    finalAmount,
    clearCart

} = useContext(CartContext);

  const {

    addresses,

    selectedAddress

  } = useContext(AddressContext);

  const address = addresses.find(

    item => item.id === selectedAddress

  );

  const {

    addOrder

} = useContext(OrderContext);

  const navigate = useNavigate();

  const handlePayment = async () => {

    try {

        const { data: order } = await API.post(

            "/payment/create-order",

            {

                amount: finalAmount

            }

        );

        const options = {

            key: import.meta.env.VITE_RAZORPAY_KEY_ID,

            amount: order.amount,

            currency: order.currency,

            name: "BigB",

            description: "BigB Shopping Payment",

            order_id: order.id,

            prefill: {

                name: address.fullName,

                contact: address.phone,

            },

            theme: {

                color: "#ff3b30"

            },

            handler: async function(response){

    try{

        const verify = await API.post(

            "/payment/verify",

            response

        );

        if(verify.data.success){

            addOrder({

    orderId: response.razorpay_order_id,

    paymentId: response.razorpay_payment_id,

    amount: finalAmount,

    products: [...cart],

    address,

    date: new Date().toLocaleString(),

    status: "Paid"

});

clearCart();

navigate("/order-success");

        }

        else{

            alert("Payment Verification Failed");

        }

    }

    catch(error){

        console.error(error);

    }

}

        };

        const razorpay = new window.Razorpay(options);

        razorpay.open();

    }

    catch (error) {

        console.error(error);

    }

};

  return (

    <>

      <Header />

      <div className="payment-page">

        <h1>Payment</h1>

        <div className="payment-container">

          <div className="payment-left">

            <h2>

              Delivery Address

            </h2>

            {

              address &&

              <div className="selected-address">

                <h3>

                  {address.fullName}

                </h3>

                <p>

                  {address.house}

                </p>

                <p>

                  {address.city}, {address.state}

                </p>

                <p>

                  {address.pincode}

                </p>

                <p>

                  {address.phone}

                </p>

              </div>

            }

            <h2>

              Payment Method

            </h2>

            <div className="payment-method">

              <label>

                <input
                  type="radio"
                  checked
                  readOnly
                />

                Razorpay

              </label>

            </div>

          </div>

          <div className="payment-right">

            <h2>

              Order Summary

            </h2>

            <div className="summary-row">

              <span>Total Items</span>

              <span>{totalItems}</span>

            </div>

            <div className="summary-row">

              <span>Total MRP</span>

              <span>₹{totalMRP}</span>

            </div>

            <div className="summary-row">

              <span>Discount</span>

              <span>-₹{totalDiscount}</span>

            </div>

            <div className="summary-row">

              <span>Subtotal</span>

              <span>₹{totalPrice}</span>

            </div>

            <div className="summary-row">

              <span>Delivery</span>

              <span>

                {

                  deliveryCharge === 0

                    ?

                    "FREE"

                    :

                    `₹${deliveryCharge}`

                }

              </span>

            </div>

            <hr />

            <div className="summary-row total">

              <span>

                Total

              </span>

              <span>

                ₹{finalAmount}

              </span>

            </div>

            <button

              className="pay-btn"

              onClick={handlePayment}

            >

              Pay with Razorpay

            </button>

          </div>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default Payment;