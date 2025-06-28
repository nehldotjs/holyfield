import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

import logo from "../Assets/images/3bf53f3da3d8c792b88e415ffe37d611fd47e0b296bcb588b656262e105731f5.svg";
import SocialButton from "../PropAssets/SocialButton";

function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer-wrapper" id="contact">
      <div className="footer-links-wrapper">
        <div className="footerLogoWrapper">
          <Link onClick={handleClick} className="footerLogoContainer">
            <img src={logo} alt="holy field logo" />
            <h2>Holy Field</h2>
          </Link>
          <SocialButton />
        </div>

        <div className="footer-links">
          <h2>Quick Links</h2>
          <Link onClick={handleClick} to="/" className="footerLink">
            Home
          </Link>
          <Link onClick={handleClick} to="/about" className="footerLink">
            About
          </Link>
          {/* <Link onClick={handleClick} to="/service" className="footerLink">
            Service
          </Link> */}
        </div>

        <div className="footer-links">
          <h2>Contact Us</h2>
          <Link onClick={handleClick} className="footerLink">
            {" "}
            456 Example Ave, Melbourne VIC 3000 AU
          </Link>
          <Link onClick={handleClick} className="footerLink">
            info@holyfield.com
          </Link>
          <Link onClick={handleClick} className="footerLink">
            Call Us: +234 902 456 8995
          </Link>
        </div>
      </div>

      <div className="footer-line"></div>
      <div className="allRightsReserved">
        <p>All right reserved &copy; 2025 Holy-Field Inc</p>
        <div className="footer-otherLinks">
          <Link onClick={handleClick} to="/policy" className="otherLink">
            Privacy Policy
          </Link>
          <Link onClick={handleClick} to="/terms" className="otherLink">
            Terms & Condition
          </Link>
        </div>
      </div>

      <div className="bckgrndFont">
        <h1 className="web-f-text">Holy Field</h1>
        <h1 className="web-m-text">Holy Field</h1>
      </div>
    </div>
  );
}

export default Footer;
