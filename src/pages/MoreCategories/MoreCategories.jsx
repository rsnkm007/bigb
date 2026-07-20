import "./MoreCategories.css";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import phone from "../../assets/Electronics/Phones/phone2.jpeg";
import laptop from "../../assets/Electronics/Laptop/laptop1.webp";
import shirt from "../../assets/Shirts/shirt-2.jpeg";
import washing from "../../assets/Electronics/Washing Machines/washing1.jpeg";
import shoe from "../../assets/Shoes/shoe2.jpeg";
import watch from "../../assets/Electronics/Wearables/watch2.jpeg";
import study from "../../assets/Study/study1.jpeg";
import micro from "../../assets/Electronics/Microwave/micro1.jpeg";
import sofa from "../../assets/Furnitures/sofa1.jpg";
import tv from "../../assets/Electronics/TV/TV1.webp";
import fridge from "../../assets/Electronics/Fridge/Fridge1.webp";
import ac from "../../assets/Electronics/AC/AC1.webp";
import ka from "../../assets/Electronics/Kitchen Appliances/KA1.webp"
import gaming from "../../assets/Electronics/Gaming/game1.webp";
import books from "../../assets/Books/book1.webp"
import beauty from "../../assets/Beauty/beauty1.webp"
import sports from "../../assets/Sports/Tennis/tennis1.jpeg"
import bags from "../../assets/Travel/Bags/bag1.webp"
import toys from "../../assets/Kids/Toys/toy1.webp"
import grocery from "../../assets/Groceries/packed/gro1.webp"

function MoreCategories() {

  const categories = [

    {
      id: 1,
      name: "Mobiles",
      image: phone
    },

    {
      id: 2,
      name: "Laptops",
      image: laptop
    },

    {
      id: 3,
      name: "Casuals",
      image: shirt
    },

    {
      id: 4,
      name: "Shoes",
      image: shoe
    },

    {
      id: 5,
      name: "Furniture",
      image: sofa
    },

    {
      id: 6,
      name: "Wearables",
      image: watch
    },

    {
      id: 7,
      name: "Washing Machine",
      image: washing
    },

    {
      id: 8,
      name: "Micro Oven",
      image: micro
    },

    {
      id: 9,
      name: "Televisions",
      image: tv
    },

    {
      id: 10,
      name: "Refrigerators",
      image: fridge
    },

    {
      id: 11,
      name: "Air Conditioners",
      image: ac
    },

    {
      id: 12,
      name: "Kitchen Appliances",
      image: ka
    },

    {
      id: 13,
      name: "Gaming",
      image: gaming
    },

    {
      id: 14,
      name: "Books",
      image: books
    },

    {
      id: 15,
      name: "Beauty",
      image: beauty
    },

    {
      id: 16,
      name: "Sports",
      image: sports
    },

    {
      id: 17,
      name: "Bags",
      image: bags
    },

    {
      id: 18,
      name: "Study",
      image: study
    },

    {
      id: 19,
      name: "Toys",
      image: toys
    },

    {
      id: 20,
      name: "Groceries",
      image: grocery
    }

  ];

  return (

    <>
      <Header />

      <div className="more-categories">

        <h1>All Categories</h1>

        <div className="all-categories">

          {categories.map((category) => (

            <Link
              key={category.id}
              to={`/category/${category.name}`}
              className="category-link"
            >

              <div className="category-card">

                <img
                  src={category.image}
                  alt={category.name}
                />

                <h3>{category.name}</h3>

              </div>

            </Link>

          ))}

        </div>

      </div>

      <Footer />

    </>

  );

}

export default MoreCategories;