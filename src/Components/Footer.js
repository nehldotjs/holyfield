import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

import logo from "../Assets/images/3bf53f3da3d8c792b88e415ffe37d611fd47e0b296bcb588b656262e105731f5.svg";
import SocialButton from "../PropAssets/SocialButton";

function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <div className="footer-wrapper" id="contact">
      <div className="footer-links-wrapper">
        <div className="footerLogoWrapper">
          <Link onClick={handleClick} className="footerLogoContainer">
            <img src={logo} alt="holyfield logo" />
            <h2>HolyField</h2>
          </Link>
          <SocialButton />
        </div>

        <div className="footer-links">
          <h2>Quick Links</h2>
          <Link onClick={handleClick} to="/" className="ql footerLink">
            Home
          </Link>
          <Link onClick={handleClick} to="/about" className="ql footerLink">
            About
          </Link>
        </div>

        <div className="footer-links">
          <h2>Our Services</h2>
          <p className="footerLink">
            Travel Processing Services{" "}
          </p> <p className="footerLink">Financial Support For Visas</p>
          <p className="footerLink">Loan Services</p>
        </div>

        <div className="footer-links">
          <h2>Contact Us</h2>
          <Link onClick={handleClick} className="footerLink">
            Valley view plaza, 99 opebi allen{" "}
          </Link>
          <Link onClick={handleClick} className="footerLink">
            info@holyfield.com
          </Link>
          <Link onClick={handleClick} className="footerLink">
            Call Us: +234 812 332 3899
          </Link>
        </div>
      </div>

      <div className="footer-line" />
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
        <h1>
          Holy <br /> Field
        </h1>
      </div>
    </div>;
}

export default Footer;
