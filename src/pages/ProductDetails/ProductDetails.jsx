import { WishlistContext } from "../../context/WishlistContext";

import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ProductDetails.css";
import { CartContext } from "../../context/CartContext";
import { useEffect, useState, useContext } from "react";
import productApi from "../../api/productApi";

function ProductDetails() {

    const { category, id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProduct = async () => {

            try {

                const response = await productApi.get("/products");

                const foundProduct = response.data.find((item) => {

                    return item.id === Number(id);

                });

                console.log("Found Product:", foundProduct);

                setProduct(foundProduct);

            }

            catch (error) {

                console.error(error);

            }

            finally {

                setLoading(false);

            }

        };

        fetchProduct();

    }, [category, id]);

    const {
        addToWishlist,
        isInWishlist
    } = useContext(WishlistContext);

    const {
        addToCart
    } = useContext(CartContext);

    if (loading) {

        return (

            <>

                <Header />

                <h1 style={{ marginTop: "150px", textAlign: "center" }}>

                    Loading...

                </h1>

            </>

        );

    }

    if (!product) {
        return (
            <>
                <Header />
                <h1 style={{ marginTop: "150px", textAlign: "center" }}>
                    Product Not Found
                </h1>
            </>
        );
    }

    const discount = Math.round(
        ((product.regular_price - product.offer_price) /
            product.regular_price) * 100
    );

    const handleShare = async () => {

        const shareData = {

            title: product.name,

            text: product.description,

            url: window.location.href

        };

        if (navigator.share) {

            await navigator.share(shareData);

        }

        else {

            await navigator.clipboard.writeText(window.location.href);

            alert("Product link copied!");

        }

    };

    const handleBuyNow = () => {

        addToCart(product);

        navigate("/cart");

    };

    return (

        <>

            <Header />

            <div className="product-details-page">

                {/* LEFT SIDE */}

                <div className="left-side">

                    <img
                        src={product.image}
                        alt={product.name}
                    />

                </div>

                {/* RIGHT SIDE */}

                <div className="right-side">

                    <h1>{product.company}</h1>

                    <h2>{product.name}</h2>

                    <p className="description">
                        {product.description}
                    </p>

                    <div className="price-section">

                        <h2 className="offer-price">
                            ₹{product.offer_price}
                        </h2>

                        <h3 className="regular-price">
                            ₹{product.regular_price}
                        </h3>

                        <span className="discount">
                            {discount}% OFF
                        </span>

                    </div>

                    <div className="buttons">

                        <button
                            className="buy-btn"
                            onClick={handleBuyNow}
                        >
                            Buy Now
                        </button>

                        <button
                            className="cart-btn"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>

                        <button
                            className="wishlist-btn"
                            onClick={() => addToWishlist(product)}
                        >

                            {

                                isInWishlist(product.category, product.id)

                                    ?

                                    "❤️ Wishlisted"

                                    :

                                    "🤍 Wishlist"

                            }

                        </button>

                        <button
                            className="share-btn"
                            onClick={handleShare}
                        >

                            🔗 Share

                        </button>

                    </div>

                    <div className="extra-details">

                        <h3>Product Details</h3>

                        <ul>
                            <li>✔ 100% Genuine Product</li>
                            <li>✔ Cash on Delivery Available</li>
                            <li>✔ 7 Days Replacement</li>
                            <li>✔ Free Delivery</li>
                            <li>✔ Secure Payment</li>
                        </ul>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );
}

export default ProductDetails;