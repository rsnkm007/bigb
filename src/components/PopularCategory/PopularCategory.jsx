import "./PopularCategory.css";
import { Link } from "react-router-dom";
import phone2 from "../../assets/Electronics/Phones/phone2.jpeg";
import laptop1 from "../../assets/Electronics/Laptop/laptop1.webp";
import shirt2 from "../../assets/Shirts/shirt-2.jpeg";
import washing1 from "../../assets/Electronics/Washing Machines/washing1.jpeg";
import shoe2 from "../../assets/Shoes/shoe2.jpeg";
import micro1 from "../../assets/Electronics/Microwave/micro1.jpeg";
import watch2 from "../../assets/Electronics/Wearables/watch2.jpeg";
import { FaThLarge } from "react-icons/fa";

function PopularCategory() {

  const categoriesDetails = [
    {
      id: "mobiles",
      image: phone2,
      category: "Mobiles",
      itemCount: "1200+ Items"
    },
    {
      id: "laptops",
      image: laptop1,
      category: "Laptops",
      itemCount: "850+ Items"
    },
    {
      id: "fashion",
      image: shirt2,
      category: "Fashion",
      routeCategory: "Casuals",
      itemCount: "2500+ Items"
    },
    {
      id: "appliances",
      image: washing1,
      category: "Appliances",
      routeCategory: "Washing Machine",
      itemCount: "1500+ Items"
    },
    {
      id: "footwear",
      image: shoe2,
      category: "Footwear",
      routeCategory: "Shoes",
      itemCount: "1800+ Items"
    },

    {
      id: "wearables",
      image: watch2,
      category: "Wearables",
      itemCount: "900+ Items"
    },

    {
      id: "more-categories",
      image: micro1,
      category: "More",
      itemCount: "See all",
      isMore: true
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
              item.isMore
                ? "/more-categories"
                : `/category/${item.routeCategory || item.category}`
            }
            className="category-link"
          >

            <div className="categories">
              {item.isMore ? (
                <div className="more-category-icon" aria-hidden="true">
                  <FaThLarge />
                </div>
              ) : (
                <img src={item.image} alt="" />
              )}
              <div className="category-name">
                {item.category}
              </div>
              <span className="category-count">{item.itemCount}</span>
            </div>

          </Link>

        ))}
      </div>
    </div>
  );
}

export default PopularCategory;
