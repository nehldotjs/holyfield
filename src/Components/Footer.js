import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

import logo from "../Assets/images/3bf53f3da3d8c792b88e415ffe37d611fd47e0b296bcb588b656262e105731f5.svg";
import SocialButton from "../PropAssets/SocialButton";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-links-wrapper">
        <div className="footerLogoWrapper">
          <div className="footerLogoContainer">
            <img src={logo} alt="holy field logo" />
            <h2>Holy Field</h2>
          </div>
          <SocialButton />
        </div>

        <div className="footer-links">
          <h2>Quick Links</h2>
          <Link to="/" className="footerLink">
            Home
          </Link>
          <Link to="/about" className="footerLink">
            About
          </Link>
          <Link to="/service" className="footerLink">
            Service
          </Link>
        </div>

        <div className="footer-links">
          <h2>link Header</h2>
          <Link className="footerLink">LINKS HERE</Link>
          <Link className="footerLink">LINKS HERE</Link>
          <Link className="footerLink">LINKS HERE</Link>
          <Link className="footerLink">LINKS HERE</Link>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="allRightsReserved">
        <p>All right reserved &copy; 2025 Holly-Field Inc</p>
        <div className="footer-otherLinks">
          <Link to="/policy" className="otherLink">
            Privacy Policy
          </Link>
          <Link to="/terms" className="otherLink">
            Terms & Condition
          </Link>
        </div>
      </div>

      <div className="bckgrndFont">
        <h1>Holy Field</h1>
      </div>
    </div>
  );
}

export default Footer;
