
import { FaFacebook,FaInstagram, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
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
          <Link to="/about" className="footer-mid1-content footer-link">About Us</Link>
          <Link to="/team" className="footer-mid1-content footer-link">Team</Link>
          <Link to="/careers" className="footer-mid1-content footer-link">Careers</Link>
          <Link to="/blog" className="footer-mid1-content footer-link">Blog</Link>
        </div>

        <div className='footer-mid2'>
          <div className='footer-mid2-content footer-mid-header'>Legal</div>
          <Link to="/terms" className="footer-mid1-content footer-link">Terms and Conditions</Link>
          <Link to="/refund" className="footer-mid1-content footer-link">Refund and Cancellations</Link>
          <Link to="/privacy" className="footer-mid1-content footer-link">Privacy Policy</Link>
          <Link to="/cookies" className="footer-mid1-content footer-link">Cokkies Policy</Link>
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