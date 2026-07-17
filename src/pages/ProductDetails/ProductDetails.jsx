import { useParams } from "react-router-dom";
import products from "../../data/products";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ProductDetails.css";

function ProductDetails() {

    const { category, id } = useParams();

    const product = products.find(
        item =>
            item.category === category &&
            item.id === Number(id)
    );

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
                            onClick={() => {
                                // Buy Now logic
                            }}
                        >
                            Buy Now
                        </button>

                        <button
                            className="cart-btn"
                            onClick={() => {
                                // Add to Cart logic
                            }}
                        >
                            Add to Cart
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