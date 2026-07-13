import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import sOffer from './assets/Offer_Banner/special_offer.jpeg'
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import bgVideo from "./assets/Shopping/shopping.mp4";
import shirt1 from "./assets/Shirts/shirt-1.webp";

import './App.css'

function Header() {
  return (
    <>
      <header className="header">

        <div className="header-left">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <div className="search-input">
              <input type="text" placeholder="Search BigB.in" />
              <button>Search</button>
            </div>
          </div>
        </div>

        <div className="header-middle">
          <h1>Welcome to BigB</h1>

        </div>

        <div className="header-right">
          <div className='header-right-item'>
            <FaUserCircle className='icons' />
            <div>Account</div>
          </div>
          <div className='header-right-item'>
            <FaShoppingCart className='icons' />
            <div>Cart</div>
          </div>
          <div className='header-right-item'>
            <FaHeart className='icons' />
            <div>Wishlist</div>
          </div>
          <div className='header-right-item'>
            <FaBell className='icons' />
            <div>Notifications</div>
          </div>
          <div className='header-right-item'>
            <FaBars className='icons' />
            <div>Menu</div>
          </div>
        </div>

      </header >
    </>
  );
}

function MainContent() {
  return (
    <>
      <div className='main-content'>
        <div className="main-content-sub">
          <img src={sOffer} alt="Special Offers" className="special-offers" />
          <div className='offer-details'>UPTO 50% off</div>
        </div>

        <div className="main-content-2">
          <SubMainContent />
          <SubMainContent />
          <SubMainContent />
          <SubMainContent />
          <SubMainContent />
        </div>
      </div>
    </>
  );
}

function SubMainContent() {

  const itemDetails = [{'company': 'Puma', 'regular_price': 499, 'offer_price': 299}]

  return (
    <>
      <div className='submaincontent'>
        <img src={shirt1} alt="Special Offers" className="special-offers" />
        <div className='company-name'>Puma</div>
        <p className='regular-price'>Regular Price: <span style={{textDecoration: "line-through"}}>499</span></p>
        <div className='offer-price-order'>
          <p>Offer Price: 299</p>
          <div>order now</div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <video
        className="background-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <Header />
      <MainContent />
    </>
  );
}

export default App
