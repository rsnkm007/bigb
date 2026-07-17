import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({
  id,
  category,
  image,
  company,
  name,
  regular_price,
  offer_price
}) {
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
            onClick={(e) => e.preventDefault()}
          >
            Order Now
          </button>

        </div>

      </div>
    </Link>
  );
}

export default ProductCard;