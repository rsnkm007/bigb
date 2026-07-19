import "./Cart.css";

import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import LoginRequiredModal from "../../components/LoginRequiredModal/LoginRequiredModal";

import { auth } from "../../firebase/firebase";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Cart() {

  const {

    cart,

    totalItems,

    totalPrice,

    totalMRP,

    totalDiscount,

    deliveryCharge,

    finalAmount,

    removeFromCart,

    increaseQuantity,

    decreaseQuantity

  } = useContext(CartContext);

  const navigate = useNavigate();
  const user = auth.currentUser;

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleCheckout = () => {

    if (user?.isAnonymous) {

        setShowLoginModal(true);

        return;

    }

    navigate("/checkout");

};

const handleGoogleLogin = () => {

    setShowLoginModal(false);

    navigate("/account");

};

  return (

    <>

      <Header />

      <div className="cart-page">

        <h1>My Cart</h1>

        {

          cart.length === 0 ?

            (

              <div className="empty-cart">

                🛒

                <h2>Your Cart is Empty</h2>

                <p>

                  Add some products to your cart.

                </p>

              </div>

            )

            :

            (

              <>

                <div className="cart-container">

                  {

                    cart.map(product => (

                      <div

                        key={`${product.category}-${product.id}`}

                        className="cart-card"

                      >

                        <img

                          src={product.image}

                          alt={product.name}

                        />

                        <div className="cart-info">

                          <h2>

                            {product.name}

                          </h2>

                          <p>

                            {product.description}

                          </p>

                          <h3>

                            ₹{product.offer_price}

                          </h3>
                          <p>

                            Subtotal :

                            ₹{product.offer_price * product.quantity}

                          </p>

                        </div>

                        <div className="quantity">

                          <button

                            onClick={() =>

                              decreaseQuantity(

                                product.category,

                                product.id

                              )

                            }

                          >

                            -

                          </button>

                          <span>

                            {product.quantity}

                          </span>

                          <button

                            onClick={() =>

                              increaseQuantity(

                                product.category,

                                product.id

                              )

                            }

                          >

                            +

                          </button>

                        </div>

                        <button

                          className="remove-btn"

                          onClick={() =>

                            removeFromCart(

                              product.category,

                              product.id

                            )

                          }

                        >

                          Remove

                        </button>

                      </div>

                    ))

                  }

                </div>

                <div className="cart-summary">

                  <h2>

                    Order Summary

                  </h2>

                  <div className="summary-row">

                    <span>

                      Total Items

                    </span>

                    <span>

                      {totalItems}

                    </span>

                  </div>

                  <div className="summary-row">

                    <span>

                      Total MRP

                    </span>

                    <span>

                      ₹{totalMRP}

                    </span>

                  </div>

                  <div className="summary-row">

                    <span>

                      Discount

                    </span>

                    <span>

                      -₹{totalDiscount}

                    </span>

                  </div>

                  <div className="summary-row">

                    <span>Subtotal</span>

                    <span>₹{totalPrice}</span>

                  </div>

                  <div className="summary-row">

                    <span>

                      Delivery Charges

                    </span>

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

                  <div className="summary-row total-row">

                    <span>

                      Total Amount

                    </span>

                    <span>

                      ₹{finalAmount}

                    </span>

                  </div>

                  <button
                    className="checkout-btn"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </button>

                </div>

              </>

            )

        }

      </div>
      <LoginRequiredModal

    isOpen={showLoginModal}

    onClose={() => setShowLoginModal(false)}

    onLogin={handleGoogleLogin}

/>

      <Footer />

    </>

  );

}

export default Cart;