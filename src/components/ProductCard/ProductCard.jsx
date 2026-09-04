import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function ProductCard(props) {

  const {
    id,
    category,
    image,
    company,
    name,
    description,
    regular_price,
    offer_price
  } = props;

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(WishlistContext);

  const product = {

    id,

    category,

    image,

    company,

    name,

    description,

    regular_price,

    offer_price

  };


  const handleOrderNow = async () => {

    await addToCart(product);

    navigate("/cart");

  };

  const handleWishlist = async () => {

    if (isInWishlist(category, id)) {

      await removeFromWishlist(category, id);

      return;

    }

    await addToWishlist(product);

  };

  const savedToWishlist = isInWishlist(category, id);

  return (
    <article className="product-card">
      <Link
        to={`/product/${category}/${id}`}
        className="product-link product-card-details"
        aria-label={`View ${name}`}
      >
        <img
          src={image}
          alt={name}
          className="product-image"
          onError={(e) => {
            console.log("Image failed:", image);
            e.currentTarget.classList.add("product-image--unavailable");
          }}
        />

        <div className="product-copy">
          <p className="company-name">{company}</p>

          <h3 className="product-name">{name}</h3>

          {description && <p className="product-description">{description}</p>}

          <div className="product-pricing">
            <span className="regular-price">₹{regular_price}</span>
            <span className="offer-price">₹{offer_price}</span>
          </div>
        </div>
      </Link>

      <div className="product-actions">
        <button
          className="order-now"
          type="button"
          onClick={handleOrderNow}
        >
          Add to Cart
        </button>

        <button
          className={`wishlist-button${savedToWishlist ? " is-saved" : ""}`}
          type="button"
          onClick={handleWishlist}
          aria-label={savedToWishlist ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={savedToWishlist}
        >
          {savedToWishlist ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
