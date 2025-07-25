import React, { useEffect, useState, useRef } from "react";
import "../styles/nav.css";

import Logo from "../Assets/images/3bf53f3da3d8c792b88e415ffe37d611fd47e0b296bcb588b656262e105731f5.svg";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

function Nav() {
  const [isMenu, setIsMenu] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);
  const [scrollStopped, setScrollStopped] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollStopped(false); // scrolling is happening

      // Clear previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set timeout to trigger when scroll stops (e.g., after 200ms)
      scrollTimeout.current = setTimeout(() => {
        setScrollStopped(true); // scrolling has stopped
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Trigger sequential style on component mount
  useEffect(() => {
    const delays = [100, 200, 500, 700, 1000, 1200, 1600, 1800]; // delay in ms for each div
    setActiveIndices([]); // Reset before triggering

    delays.forEach((delay, index) => {
      setTimeout(() => {
        setActiveIndices(prev => [...prev, index]);
      }, delay);
    });
  }, []); // The empty dependency array ensures this runs once when the component mounts

  const getStyle = index => {
    const active = activeIndices.includes(index);
    const opacity = ["1", "1", "1", "1", "1", "1", "1", "1"];

    return {
      transition: "all 1s ease-in-out",
      opacity: active ? opacity[index] : "0"
    };
  };

  const handleClick = () => {
    setIsMenu(!isMenu);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <div className="nav-wrapper " style={getStyle(1)}>
      <div className={!scrollStopped ? "nav-container isNavDisplay" : "nav-container"}>
        <div className="nav-logo-wrapper">
          <img style={getStyle(2)} src={Logo} alt="Holyfield logo" />
          <Link className="logoLink" to="/" onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMenu(false);
            }}>
            <h3 style={getStyle(3)}>HolyField</h3>
          </Link>
        </div>

        <div style={getStyle(4)} className="nav-web-links">
          <Link onClick={handleClick} className="webNavLinks" to="/">
            <GoHomeFill />
            Home
          </Link>
          <Link onClick={handleClick} className="webNavLinks" to="/about">
            <FaInfoCircle /> About
          </Link>
          <Link onClick={handleClick} className="webNavLinks" to="/contact-us">
            <MdOutlineConnectWithoutContact />
            Contact
          </Link>
        </div>
        <div className="nav-mobile-links">
          <button className="burgerButton" onClick={() => setIsMenu(!isMenu)}>
            <div className={!isMenu ? "line1" : "line1 line1Anim"}> </div>
            <div className={!isMenu ? "line2" : "line2 line2Anim"}> </div>
            <div className={!isMenu ? "line3" : "line3 line3Anim"}> </div>
          </button>
        </div>
      </div>
      <div className={isMenu ? "mobileMenu-links-wrapper " : "mobileMenu-links-wrapper isMobileLink"}>
        <div className={!scrollStopped ? "mobileMenu-links-container isNavDisplay" : "mobileMenu-links-container"}>
          <Link onClick={handleClick} className="webNavLinks webNavLinks-mobile" to="/">
            Home
          </Link>
          <Link onClick={handleClick} className="webNavLinks webNavLinks-mobile" to="/about">
            About
          </Link>

          <Link onClick={handleClick} className="webNavLinks webNavLinks-mobile" to="/contact-us">
            Contact
          </Link>
        </div>
      </div>
    </div>;
}

export default Nav;
