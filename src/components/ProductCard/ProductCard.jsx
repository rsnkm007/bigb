import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard(props) {

  const {
    id,
    category,
    image,
    company,
    name,
    regular_price,
    offer_price
  } = props;

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const product = {

    id,

    category,

    image,

    company,

    name,

    regular_price,

    offer_price

  };


  const handleOrderNow = (e) => {

    e.preventDefault();

    addToCart(product);

    navigate("/cart");

  };
  return (
    <Link
      to={`/product/${category}/${id}`}
      className="product-link"
    >
      <div className="product-card">
        <img
          src={image}
          alt={name}
          className="special-offers"
          onError={(e) => {
            console.log("Image failed:", image);
            e.target.style.border = "2px solid red";
          }}
        />

        <div className="company-name">
          {company}
        </div>

        <div className="product-name">
          {name}
        </div>

        <p className="regular-price">
          Regular Price :
          <span
            style={{
              textDecoration: "line-through",
              marginLeft: "5px"
            }}
          >
            ₹{regular_price}
          </span>
        </p>

        <div className="offer-price-order">

          <p>
            Offer Price : ₹{offer_price}
          </p>

          <button
            className="order-now"
            onClick={handleOrderNow}
          >
            Order Now
          </button>

        </div>

      </div>
    </Link>
  );
}

export default ProductCard;