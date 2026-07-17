import { useParams, Link } from "react-router-dom";
import products from "../../data/products";
import "./Category.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

function Category() {

    const { categoryName } = useParams();

    const filteredProducts = products.filter(
        product => product.category === categoryName
    );

    const {
        addToWishlist,
        isInWishlist
    } = useContext(WishlistContext);

    const {
        addToCart
    } = useContext(CartContext);

    return (

        <div className="category-container">

            <Header />

            <div className="background-text">
                BigB
            </div>

            <h1>{categoryName}</h1>

            <div className="product-detail-container">

                {filteredProducts.map(product => (

                    <Link
                        to={`/product/${product.category}/${product.id}`}
                        className="product-link"
                        key={product.id}
                    >

                        <div className="product-details">

                            <img
                                src={product.image}
                                width={200}
                                alt={product.name}
                            />

                            <h3>{product.name}</h3>

                            <div>{product.description}</div>

                            <p>
                                ₹{product.offer_price}

                                <span>
                                    {" "}
                                    MRP:
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            marginLeft: "5px"
                                        }}
                                    >
                                        ₹{product.regular_price}
                                    </span>

                                    {" "}
                                    {Math.round(
                                        ((product.regular_price - product.offer_price) /
                                            product.regular_price) * 100
                                    )}% OFF
                                </span>

                            </p>
                            <div className="category-buttons">

                                <button
                                    className="btn"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Buy Now
                                </button>

                                <button
                                    className="btn"
                                    onClick={(e) => {

                                        e.preventDefault();

                                        addToCart(product);

                                    }}
                                >
                                    Add to Cart
                                </button>

                                <button
                                    className="btn"
                                    onClick={(e) => {

                                        e.preventDefault();

                                        addToWishlist(product);

                                    }}
                                >

                                    {

                                        isInWishlist(product.category, product.id)

                                            ?

                                            "❤️ Wishlisted"

                                            :

                                            "🤍 Wishlist"

                                    }

                                </button>

                            </div>

                        </div>

                    </Link>

                ))}

            </div>

            <Footer className="category-footer" />

        </div>

    );
}

export default Category;