import "./Checkout.css";

import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import AddressForm from "../../components/AddressForm/AddressForm";
import AddressList from "../../components/AddressList/AddressList";
import { AddressContext } from "../../context/AddressContext";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Checkout() {

  const {

    cart,

    totalItems,

    totalMRP,

    totalDiscount,

    totalPrice,

    deliveryCharge,

    finalAmount

  } = useContext(CartContext);

  const {

    selectedAddress

  } = useContext(AddressContext);

  const navigate = useNavigate();

  return (

    <>

      <Header />

      <div className="checkout-page">

        <h1>Checkout</h1>

        <div className="checkout-container">

          {/* LEFT */}

          <div className="checkout-left">

            <h2>Delivery Address</h2>

            <AddressForm />
            <AddressList />

            <hr />

            <h2>Review Your Items</h2>

            {

              cart.map(product => (

                <div
                  key={`${product.category}-${product.id}`}
                  className="checkout-product"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <div>

                    <h3>{product.name}</h3>

                    <p>{product.description}</p>

                    <p>

                      Qty : {product.quantity}

                    </p>

                    <h4>

                      ₹{product.offer_price * product.quantity}

                    </h4>

                  </div>

                </div>

              ))

            }

          </div>

          {/* RIGHT */}

          <div className="checkout-right">

            <h2>Order Summary</h2>

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

              <span>Total Amount</span>

              <span>₹{finalAmount}</span>

            </div>

            <button

              className="payment-btn"

              disabled={!selectedAddress}

              onClick={() => navigate("/payment")}

            >

              Continue to Payment

            </button>

          </div>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default Checkout;