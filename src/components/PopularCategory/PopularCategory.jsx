import "./PopularCategory.css";
import { Link } from "react-router-dom";
import phone2 from "../../assets/Electronics/Phones/phone2.jpeg";
import laptop1 from "../../assets/Electronics/Laptop/laptop1.webp";
import shirt2 from "../../assets/Shirts/shirt-2.jpeg";
import washing1 from "../../assets/Electronics/Washing Machines/washing1.jpeg";
import shoe2 from "../../assets/Shoes/shoe2.jpeg";
import micro1 from "../../assets/Electronics/Microwave/micro1.jpeg";
import watch2 from "../../assets/Electronics/Wearables/watch2.jpeg";

function PopularCategory() {

  const categoriesDetails = [
    {
      id: crypto.randomUUID(),
      image: phone2,
      category: "Mobiles"
    },
    {
      id: crypto.randomUUID(),
      image: laptop1,
      category: "Laptops"
    },
    {
      id: crypto.randomUUID(),
      image: shirt2,
      category: "Casuals"
    },
    {
      id: crypto.randomUUID(),
      image: washing1,
      category: "Washing Machine"
    },
    {
      id: crypto.randomUUID(),
      image: shoe2,
      category: "Shoes"
    },

    {
      id: crypto.randomUUID(),
      image: watch2,
      category: "Wearables"
    },

    {
      id: crypto.randomUUID(),
      image: micro1,
      category: "More categories"
    }
  ];

  return (
    <div className="popular-categories">
      <div className="popular-categories-heading">Popular Categories</div>
      <div className="categories-container">
        {categoriesDetails.map((item) => (

          <Link
            key={item.id}
            to={
              item.category === "More categories"
                ? "/more-categories"
                : `/category/${item.category}`
            }
            className="category-link"
          >

            <div className="categories">
              <img src={item.image} alt={item.category} />
              <div className="category-name">
                {item.category}
              </div>
            </div>

          </Link>

        ))}
      </div>
    </div>
  );
}

export default PopularCategory;