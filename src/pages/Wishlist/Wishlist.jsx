import "./Wishlist.css";

import { useContext } from "react";

import { WishlistContext } from "../../context/WishlistContext";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Wishlist() {

    const {

        wishlist,

        removeFromWishlist

    } = useContext(WishlistContext);

    return (

        <>

            <Header />

            <div className="wishlist-page">

                <h1>My Wishlist</h1>

                {

                    wishlist.length === 0 ?

                        (

                            <div className="empty-wishlist">

                                ❤️

                                <h2>Your Wishlist is Empty</h2>

                                <p>

                                    Add products you love and they'll appear here.

                                </p>

                            </div>

                        )

                        :

                        (

                            <div className="wishlist-container">

                                {

                                    wishlist.map(product => (

                                        <div

                                            className="wishlist-card"

                                            key={`${product.category}-${product.id}`}

                                        >

                                            <img

                                                src={product.image}

                                                alt={product.name}

                                            />

                                            <div>

                                                <h2>

                                                    {product.name}

                                                </h2>

                                                <p>

                                                    {product.description}

                                                </p>

                                                <h3>

                                                    ₹{product.offer_price}

                                                </h3>

                                            </div>

                                            <button

                                                onClick={() =>

                                                    removeFromWishlist(

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

                        )

                }

            </div>

            <Footer />

        </>

    );

}

export default Wishlist;