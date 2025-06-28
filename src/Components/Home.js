import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import DiscoverButton from "../PropAssets/DiscoverBtn";

import friendsImage from "../Assets/images/model.png";
import airport from "../Assets/images/airport-1822133_1920.jpg";
import finance from "../Assets/images/laptop-3196481_1920.jpg";
import assist from "../Assets/images/credit-cards-1583534_1280.jpg";
import plan from "../Assets/images/finance.jpg";
import receptionist from "../Assets/images/receptionists-5975962_1920.jpg";

import { HiMiniBanknotes } from "react-icons/hi2";
import { IoMailOutline, IoStatsChartSharp } from "react-icons/io5";
import { TbMathSymbols, TbTruckDelivery } from "react-icons/tb";
import { FaRoute } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Testimonial from "../PropAssets/Testimonial";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const [activeIndices, setActiveIndices] = useState([]);

  // Trigger sequential style on component mount

  useEffect(() => {
    const delays = [300, 200, 500, 700, 1000, 1200, 1600, 1800]; // delay in ms for each div
    setActiveIndices([]); // Reset before triggering

    delays.forEach((delay, index) => {
      setTimeout(() => {
        setActiveIndices((prev) => [...prev, index]);
      }, delay);
    });
  }, []); // The empty dependency array ensures this runs once when the component mounts
  const getStyle = (index) => {
    const active = activeIndices.includes(index);
    const opacity = ["1", "1", "1", "1", "1", "1", "1", "1"];

    return {
      transition: "all 1s ease-in-out",
      opacity: active ? opacity[index] : "0"
    };
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once

      offset: 120,
      delay: 0,
      easing: "ease",
      mirror: false,
      anchorPlacement: "top-bottom"
    });
  }, []);

  return (
    <div className="home-wrapper">
      <div className="hero-wrapper">
        <div
          style={getStyle(1)}
          className="shapes-wrapper style={getStyle(4)} ">
          <div className="wavy-float">
            <div className="wavy-circle"></div>
          </div>
        </div>

        <div className="blobWrapper" style={getStyle(2)}>
          <div className="blob"></div>
        </div>

        <h1 style={getStyle(3)}>
          Unlock New Opportunities with Holy Field — Your Gateway to Global
          Possibilities
        </h1>

        <div className="hero-paragraph-container">
          <p style={getStyle(4)}>
            Holy Field, we make your dreams of studying, working, traveling, or
            expanding your business abroad a reality. Start your journey today
            with confidence, knowing you have a dedicated partner that puts your
            goals first.
          </p>
        </div>

        <DiscoverButton style={getStyle(5)} />
      </div>

      <div className="home-section2">
        <div className="h-section2-text-Wrapper">
          <h1 data-aos="fade-up">
            Explore Our Comprehensive Visa Processing Services Tailored for Your
            Needs
          </h1>
          <p data-aos="fade-up">
            Navigating the world of visas can be complex. Our dedicated team
            simplifies the process, ensuring you find the right visa solution.
          </p>
          <div className="types-wrapper">
            <div className="type" data-aos="fade-up">
              <h2>Types of Visa</h2>
              <p>
                We offer school, visiting, work, and immigration visas to meet
                your needs.
              </p>
            </div>
            <div className="type" data-aos="fade-up">
              <h2>Get Started</h2>
              <p>
                Contact us today to learn more about our visa processing
                services!
              </p>
            </div>
          </div>
        </div>
        <div className="h-section2-img-wrapper" data-aos="fade-up">
          <div className="imgBackgroundOverlay" data-aos="fade-right"></div>
          <img src={friendsImage} alt="" data-aos="fade-up" />{" "}
        </div>{" "}
      </div>

      <div className="home-section3">
        <h1 data-aos="fade-up" className="section3-header">
          Comprehensive Financial Support Services for Your Visa Needs
        </h1>
        <div className="section3-context-wrapper">
          <div data-aos="fade-up" className="section-3-container">
            <div className="section3-imageWrapper">
              <img src={airport} alt="" />
            </div>
            <h3 className="hs3-header">
              Tailored Solutions for All Your Visa Financial Requirements
            </h3>
            <p>
              We provide essential documentation and financial support to
              facilitate your visa applications.
            </p>
          </div>

          <div data-aos="fade-up" className="section-3-container">
            <div className="section3-imageWrapper">
              <img src={finance} alt="" />
            </div>
            <h3 className="hs3-header">
              Expert Assistance in Proof of Funds and Financial Documentation{" "}
            </h3>
            <p>
              Our team ensures you have the necessary financial documents for a
              successful visa application.{" "}
            </p>
          </div>

          <div data-aos="fade-up" className="section-3-container">
            <div className="section3-imageWrapper">
              <img src={assist} alt="" />
            </div>
            <h3 className="hs3-header">
              Comprehensive Services for Loan Applications and Financial Support{" "}
            </h3>
            <p>
              We offer a range of loan options to meet your financial needs.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="home-section4">
        <div className="hs4-container1" data-aos="fade-up">
          <p className="p-heading">Loan</p>
          <h2>Explore Our Diverse Loan Services Today</h2>
          <p className="text">
            We offer a wide range of loan services tailored to meet your
            financial needs. Whether you're looking for personal or business
            financing, we have options that suit you.
          </p>
        </div>

        <div className="hs4-container2">
          <div data-aos="fade-up" className="hs4-Context-wrapper">
            <div className="iconWrapper">
              <HiMiniBanknotes className="hs4-icon" />
            </div>
            <h2>Personal Loans for Every Need</h2>
            <p>
              Need a personal loan? We provide flexible solutions, competitive
              rates, and an easy application. Whether for home improvement, debt
              consolidation, or unexpected expenses, we're here to help you
              achieve your financial goals.
            </p>
          </div>
          <div data-aos="fade-up" className="hs4-Context-wrapper">
            <div className="iconWrapper">
              <IoStatsChartSharp className="hs4-icon" />
            </div>
            <h2>Business Loans to Fuel Your Growth</h2>
            <p>
              Business loans are vital tools that help accelerate growth and
              achieve objectives. They provide capital to expand operations,
              invest in new projects, or improve cash flow, enhancing your
              success potential in a competitive market.
            </p>
          </div>
          <div data-aos="fade-up" className="hs4-Context-wrapper">
            <div className="iconWrapper">
              <TbTruckDelivery className="hs4-icon" />
            </div>
            <h2>Financing Solutions for Local Purchase Orders</h2>
            <p>
              Extensive and Comprehensive Financing Solutions Tailored
              Specifically for Local Purchase Orders and Small Business Needs
            </p>
          </div>
        </div>
      </div>

      <div className="home-section5">
        <div className="hs5-section1">
          <p data-aos="fade-up" className="hs5-p-header">
            Empower
          </p>
          <h1 data-aos="fade-up" className="hs5-header">
            Your Trusted Partner in Finance Growth
          </h1>
          <p data-aos="fade-up" className="hs5-text">
            Choosing Holy-Field means unlocking an expansive world of
            opportunities that cater specifically to your aspirations. Our deep
            expertise in visa processing, combined with comprehensive financial
            support, guarantees a seamless and stress-free experience that is
            meticulously tailored to meet your unique needs and goals. We are
            dedicated to guiding you every step of the way, ensuring that all
            your requirements are met with precision and care.
          </p>

          <div className="hs5-sub-wrapper">
            <div data-aos="fade-up" className="hs5-sub-container">
              <div className="hs5-icon-container">
                <FaRoute className="sub-icon" />
              </div>
              <h1>Expert Guidance</h1>
              <p className="hs5-sub-text">
                Navigate the complexities of visa applications with our
                knowledgeable team by your side.
              </p>
            </div>
            <div data-aos="fade-up" className="hs5-sub-container">
              <div className="hs5-icon-container">
                <TbMathSymbols className="sub-icon" />
              </div>
              <h1>Financial Solution</h1>
              <p className="hs5-sub-text">
                Access tailored financial support to make your visa journey
                smoother and more affordable.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="hs5-section2">
          <div className="hs5-imageWrapper">
            <img src={plan} alt="" />
          </div>
        </div>
      </div>
      <div className="home-testimonial-Wrapper">
        <Testimonial />
      </div>

      <div className="contact-id" id="contact"></div>

      <div className="home-section7" id="contact">
        <div className="hs7-top-section">
          <p className="hs7-pTag-header">Connect</p>
          <h1>Get In Touch</h1>
          <p className="pTag-desc">
            We’re here to help with your inquiries and needs.
          </p>
        </div>

        <div className="h7-bottom-section">
          <div className="h7-b-subSection-1">
            <div className="h7-contact-wrapper">
              <div data-aos="fade-up" className="h7-subContactContainer">
                <IoMailOutline />
                <h3>Mail</h3>
                <a href="mailto:info@holyfield.com" className="mailLink">
                  info@holyfield.com
                </a>
              </div>
              <div data-aos="fade-up" className="h7-subContactContainer">
                <BsTelephone />
                <h3>phone</h3>
                <a href="#" className="foneLink">
                  +234 012 345 6987{" "}
                </a>
              </div>
              <div data-aos="fade-up" className="h7-subContactContainer">
                <MdLocationOn />
                <h3>office</h3>
                <p className="addressLink">
                  456 Example Ave, Melbourne VIC 3000 AU
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="h7-subSection-2">
            <div className="hs7-imageWrapper">
              <img src={receptionist} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
