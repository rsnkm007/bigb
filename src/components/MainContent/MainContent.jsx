import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ProductCard from "../ProductCard/ProductCard";

import "./MainContent.css";

// image imports
import offer1 from "../../assets/Offer_Banner/special_offer1.jpeg";
import offer2 from "../../assets/Offer_Banner/special_offer2.jpeg";
import offer3 from "../../assets/Offer_Banner/special_offer3.jpeg";

import shirt1 from "../../assets/Shirts/shirt-1.webp";
import shoe1 from "../../assets/Shoes/shoe1.webp";
import phone1 from "../../assets/Electronics/Phones/phone1.webp";
import sofa1 from "../../assets/Furnitures/sofa1.jpg";


function MainContent() {

  const itemsDescriptions = [
    { image: shirt1, company: "Puma", regular_price: 499, offer_price: 299, id: crypto.randomUUID() },
    { image: shoe1, company: "Nike", regular_price: 799, offer_price: 499, id: crypto.randomUUID() },
    { image: phone1, company: "Adidas", regular_price: 999, offer_price: 699, id: crypto.randomUUID() },
    { image: shoe1, company: "Levis", regular_price: 899, offer_price: 599, id: crypto.randomUUID() },
    { image: sofa1, company: "US Polo", regular_price: 1099, offer_price: 799, id: crypto.randomUUID() }
  ];

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
      <div className="main-content-sub">

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="offer-swiper">

          {offers.map((offer, index) => (
            <SwiperSlide key={index}>
              <div className="offer-slide">
                <img src={offer.image} alt={offer.title} />

                <div className="offer-text">
                  <h2>{offer.title}</h2>
                  <p>{offer.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <div className="main-content-2">
        {itemsDescriptions.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            company={item.company}
            regular_price={item.regular_price}
            offer_price={item.offer_price}
          />
        ))}
      </div>
    </div>
  );
}

export default MainContent;