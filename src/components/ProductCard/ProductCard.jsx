import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import products from "../../data/products";

function ProductCard({
  id,
  category,
  image,
  company,
  name,
  regular_price,
  offer_price
}) 
{

  const navigate = useNavigate();

const { addToCart } = useContext(CartContext);

const handleOrderNow = (e) => {

    e.preventDefault();

    const product = products.find(
        p => p.id === id && p.category === category
    );

    if (product) {
        addToCart(product);
        navigate("/cart");
    }

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