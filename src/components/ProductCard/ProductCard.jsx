import "./ProductCard.css"

function ProductCard({ image, company, regular_price, offer_price }) {
  return (
    <div className="product-card">
      <img src={image} alt={company} className="special-offers" />

      <div className="company-name">{company}</div>

      <p className="regular-price">
        Regular Price:
        <span style={{ textDecoration: "line-through" }}>
          ₹{regular_price}
        </span>
      </p>

      <div className="offer-price-order">
        <p>Offer Price: ₹{offer_price}</p>
        <div>Order Now</div>
      </div>
    </div>
  );
}

export default ProductCard;