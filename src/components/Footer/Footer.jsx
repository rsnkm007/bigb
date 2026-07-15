
import { FaFacebook,FaInstagram, FaShareAlt } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer-left'>
          <div className='footer-logo'>BigB</div>
          <div className='bigb-about'>Delivering happiness and your favorite food right to your doorstep. Experience the best dining from home</div>
        </div>


        <div className='footer-mid1'>
          <div className='footer-mid1-content footer-mid-header'>Company</div>
          <div className='footer-mid1-content'>About us</div>
          <div className='footer-mid1-content'>Team</div>
          <div className='footer-mid1-content'>Careers</div>
          <div className='footer-mid1-content'>Blog</div>
        </div>

        <div className='footer-mid2'>
          <div className='footer-mid2-content footer-mid-header'>Legal</div>
          <div className='footer-mid2-content'>Terms and Conditions</div>
          <div className='footer-mid2-content'>Refund and Cancellations</div>
          <div className='footer-mid2-content'>Privacy Policy</div>
          <div className='footer-mid2-content'>Cookies Policy</div>
        </div>

        <div className='footer-right'>
          <div className='footer-right-header'>Follow Us</div>
          <div className='footer-icons'>
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaShareAlt className="icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;