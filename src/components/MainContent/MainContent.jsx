import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./MainContent.css";

import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import productApi from "../../api/productApi";

// Offer Images
import offer1 from "../../assets/Offer_Banner/special_offer1.jpeg";
import offer2 from "../../assets/Offer_Banner/special_offer2.png";
import offer3 from "../../assets/Offer_Banner/special_offer3.png";

function MainContent() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await productApi.get("/products");

        setProducts(response.data);

      } catch (error) {

        console.error(error);

      }

    };

    fetchProducts();

  }, []);

  // Only featured products will be displayed on the Home page
  const featuredProducts = products.filter(
    product => product.featured
  );

  const offers = [
    {
      image: offer1,
      title: "UP TO 50% OFF",
      subtitle: "Fashion Collection"
    },
    {
      image: offer2,
      title: "BIG ELECTRONICS SALE",
      subtitle: "Save up to ₹10,000"
    },
    {
      image: offer3,
      title: "HOME FURNITURE",
      subtitle: "Starting from ₹999"
    }
  ];

  return (
    <div className="main-content">

      {/* Offer Banner Slider */}

      <div className="main-content-sub">

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          loop={true}
          className="offer-swiper"
        >

          {offers.map((offer, index) => (

            <SwiperSlide key={index}>

              <div className="offer-slide">

                <img
                  src={offer.image}
                  alt={offer.title}
                />

                <div className="offer-text">
                  <h2>{offer.title}</h2>
                  <p>{offer.subtitle}</p>
                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

      {/* Featured Products */}

      <div className="main-content-2">

        {featuredProducts.map((product) => (

          <ProductCard
            key={product.id}
            {...product}
          />

        ))}

      </div>

    </div>
  );
}

export default MainContent;