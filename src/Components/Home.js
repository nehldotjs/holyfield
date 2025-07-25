import React, { useEffect, useState } from "react";
import DiscoverButton from "../PropAssets/DiscoverBtn";
import "../styles/hero.css";

import receptionist from "../Assets/images/receptionists-5975962_1920.jpg";
import assist from "../Assets/images/credit-cards-1583534_1280.jpg";
import airport from "../Assets/images/airport-1822133_1920.jpg";
import finance from "../Assets/images/laptop-3196481_1920.jpg";
import friendsImage from "../Assets/images/model.png";
import plan from "../Assets/images/finance.jpg";

import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { HiMiniBanknotes } from "react-icons/hi2";
import { TbMathSymbols, TbTruckDelivery } from "react-icons/tb";

import Testimonial from "../PropAssets/Testimonial";
import "aos/dist/aos.css";
import AOS from "aos";

import { IoStatsChartSharp } from "react-icons/io5";
import { FaPhoneAlt, FaRoute } from "react-icons/fa";
import CountUp from "../PropAssets/CountDown";
import BookACall from "./BookAcallForm";

function Home() {
  const [isCall, setIsCall] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);
  useEffect(() => {
    const delays = [300, 200, 500, 700, 1000, 1200, 1600, 1800];
    setActiveIndices([]);
    delays.forEach((delay, index) => {
      setTimeout(() => {
        setActiveIndices(prev => [...prev, index]);
      }, delay);
    });
  }, []);

  const getStyle = index => {
    const active = activeIndices.includes(index);
    const opacity = ["1", "1", "1", "1", "1", "1", "1", "1"];
    return {
      transition: "all 1s ease-in-out",
      opacity: active ? opacity[index] : "0"
    };
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      delay: 0,
      easing: "ease",
      mirror: false,
      anchorPlacement: "top-bottom"
    });
  }, []);

  return (
    <div className="home-wrapper">
      <div className="blobWrapper" style={getStyle(2)}>
        <div className="blob">
          <svg
            viewBox="0 0 800 800"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] -z-10 opacity-40 blur-2xl"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#00FFC6" />
                <stop offset="100%" stop-color="#005DFF" />
              </linearGradient>
            </defs>
            <path fill="url(#grad1)">
              <animate
                attributeName="d"
                dur="12s"
                repeatCount="indefinite"
                values="
        M500,320Q570,390,530,470Q490,550,410,550Q330,550,280,490Q230,430,230,360Q230,290,280,240Q330,190,410,210Q490,230,500,320Z;
        M520,310Q600,390,520,470Q440,550,360,510Q280,470,250,390Q220,310,250,240Q280,170,360,190Q440,210,520,310Z;
        M500,320Q570,390,530,470Q490,550,410,550Q330,550,280,490Q230,430,230,360Q230,290,280,240Q330,190,410,210Q490,230,500,320Z"
              />
            </path>
          </svg>
        </div>
      </div>
      <div className="hero-wrapper">
        <div
          style={getStyle(1)}
          className="shapes-wrapper style={getStyle(4)} "
        >
          <div className="wavy-float">
            <div className="wavy-circle" />
          </div>
        </div>

        <h1 style={getStyle(3)}>
          Unlock New Opportunities with HolyField <br /> Your Gateway to Global
          Possibilities
        </h1>

        <div className="hero-paragraph-container">
          <p style={getStyle(4)}>
            HolyField, we make your dreams of studying, working, traveling, or
            expanding your experiences abroad a reality. Start your journey
            today with confidence, knowing you have a dedicated partner that
            puts your goals first.
          </p>
        </div>

        <div className="discoverLink" style={getStyle(5)}>
          <DiscoverButton />
        </div>
      </div>
      <div className="home-section2">
        <div className="h-section2-text-Wrapper">
          <h1 data-aos="fade-up">
            Explore Seamless, Personalized Financial Solutions and Travel
            Support Crafted Just for You
          </h1>
          <p data-aos="fade-up">
            Navigating the world of Finances can be complex. Our dedicated team
            simplifies the process, ensuring you find the right Finance
            solution.
          </p>
          <div className="types-wrapper">
            <div className="type" data-aos="fade-up">
              <h2>Types of Visas</h2>
              <p>
                We provide reliable financial support services tailored to
                assist with your travel visa applications including essential
                documentation such as account statements, verification letters,
                and supporting financial credentials to strengthen your
                application.
              </p>
            </div>
            <div className="type" data-aos="fade-up">
              <h2>Get Started</h2>
              <p>
                Ready to begin your journey? Contact us today to discover how
                our expert financial support and visa processing assistance can
                simplify your travel plans and increase your chances of success!
              </p>
            </div>
          </div>
        </div>
        <div className="h-section2-img-wrapper" data-aos="fade-up">
          <div className="imgBackgroundOverlay" data-aos="fade-right" />
          <img src={friendsImage} alt="" data-aos="fade-up" />
        </div>
      </div>
      <div className="home-section3">
        <h1 data-aos="fade-up" className="section3-header">
          Comprehensive Financial <br /> Support Services for Your Visa Needs
        </h1>
        <div className="section3-context-wrapper">
          <div data-aos="fade-left" className="section-3-container">
            <div className="section3-imageWrapper">
              <img src={finance} alt="" />
            </div>
            <p>
              Tailored Solutions for All Your Everyday Financial Travel
              Requirements
            </p>
            <h3 className="hs3-header">
              We provide essential documentation and financial support to
              facilitate your visa applications.
            </h3>
          </div>

          <div data-aos="fade-up" className="section-3-container">
            <div className="section3-imageWrapper">
              <img src={airport} alt="" />
            </div>
            <p>
              Reliable Assistance with Financial Endorsements and Supporting
              Travel Documents
            </p>
            <h3 className="hs3-header">
              Our team ensures you have the necessary financial documents for a
              successful Visa application.
            </h3>
          </div>

          <div data-aos="fade-right" className="section-3-container">
            <div className="section3-imageWrapper">
              <img src={assist} alt="" />
            </div>
            <p>
              Comprehensive Financial Support Services for Visa Applications and
              Travel Needs
            </p>
            <h3 className="hs3-header">
              We offer a range of loan options to meet your financial travel
              needs.
            </h3>
          </div>
        </div>
        <div className="service-success" data-aos="slide-up">
          <p data-aos="fade-right">Delivering value</p>
          <div className="home-s-content-wrapper">
            <div className="home-s-content-wrapper-1">
              <h1 data-aos="fade-right">our achievements</h1>
              <p data-aos="fade-right">
                With a foundation built on over years of experience, we began as
                a creative focused brand with one mission: to elevate businesses
                through innovative digital transformation. Over the years, we’ve
                grown into a trusted partner for ambitious brands, offering
                strategy led design, branding, and digital solutions that drive
                visibility, engagement, and growth.
              </p>
              <div
                data-aos="fade-right"
                className="home-booking-button-wrapper"
              >
                <button
                  data-aos="fade-right"
                  onClick={() => setIsCall(!isCall)}
                  to="book-a-call-with-us"
                >
                  book a call
                </button>
              </div>
            </div>
            <div className="home-s-content-wrapper-2">
              <div className="countdown-1" data-aos="slide-right">
                <CountUp
                  from={0}
                  to={300}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                <p>digital solutions delivered</p>
              </div>

              <div className="countdown-1" data-aos="slide-up">
                <CountUp
                  from={0}
                  to={120}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                <p>successful collaboration </p>
              </div>
              <div className="countdown-1" data-aos="slide-left">
                <CountUp
                  from={0}
                  to={2}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                <p>years of experience </p>
              </div>
              <div className="countdown-1" data-aos="slide-down">
                <CountUp
                  from={0}
                  to={20}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                <p>brands created</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-section4">
        <div className="hs4-container1">
          <p data-aos="fade-left" className="p-heading">
            Loan
          </p>
          <h2 data-aos="fade-up">Explore Our Diverse Loan Services Today</h2>
          <p data-aos="fade-down" className="text">
            We offer a wide range of loan services tailored to meet your
            financial needs. Whether you're looking for personal or experiences
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
      <div className="contact-id" id="contact" />
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
                <IoMdMail color="#006aff" />
               <div>
                <h3>Mail</h3>
                <a href="mailto:info@holyfield.com" className="mailLink">
                  info@holyfield.com
                </a>
               </div>
              </div>
              <div data-aos="fade-up" className="h7-subContactContainer">
                <FaPhoneAlt color="#a8d800" />
                <div>
                <h3>phone</h3>
                <a href="#contact" className="phoneLink">
                  +234 812 332 3899
                </a>
                </div>
              </div>
              <div data-aos="fade-up" className="h7-subContactContainer">
                <MdLocationOn color="#ff582b" />
                <div>
                <h3>office</h3>
                <p className="addressLink">Valley view plaza, 99 opebi allen</p>
                </div>
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

      <div
        className={
          isCall ? "book-a-call-section isCallActive" : "book-a-call-section"
        }
      >
        <div className="bookingContainer">
          <div className="isCallCloseButtonWrapper">
            <button
              onClick={() => setIsCall(!isCall)}
              className="call-cancel-button"
            >
              close
            </button>
          </div>
          <BookACall />
        </div>
      </div>
    </div>
  );
}

export default Home;
