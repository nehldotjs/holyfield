import React, { useEffect, useState } from "react";
import "../styles/about.css";
import Testimonial from "../PropAssets/Testimonial";

import consultation from "../Assets/svg/consultation.svg";
import review from "../Assets/svg/review.svg";
import submission from "../Assets/svg/submission.svg";

import network from "../Assets/images/NETWROKING.png";

import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const [activeIndices, setActiveIndices] = useState([]);

  // Trigger sequential style on component mount
  useEffect(() => {
    const delays = [100, 200, 500, 700, 1000, 1200, 1600, 1800]; // delay in ms for each div
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
      transition: "all 0.5s ease-in-out",
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
    <>
      <div className="about-wrapper">
        <div className="about-context-Wrapper">
          <h1 style={getStyle(1)}>
            Discover the Journey of Holy-Field: From Humble Beginnings to
            Industry Leader
          </h1>
          <p style={getStyle(2)}>
            Founded in 2023, HolyField began as a focused venture with a simple
            goal: to empower individuals and businesses with access to tailored
            financial solutions that help them achieve more. Over time, we have
            evolved into a trusted provider of flexible loan services and
            financial documentation support, committed to meeting the changing
            needs of our growing client base. At HolyField, we believe that
            everyone should be empowered to pursue their goals whether it's
            expanding a business, managing personal growth, or preparing for
            international opportunities. We deliver this empowerment through
            accessible loan offerings and strategic financial assistance
            designed to support a wide range of personal and professional
            ambitions. While we do not issue or guarantee visas, we provide
            clients with key financial documentation such as account summaries,
            income validation, tax records, and corporate filings to support a
            wide range of personal, professional, and travel-related goals. With
            a clear commitment to excellence and client success, HolyField
            continues to be a reliable partner for individuals and enterprises
            navigating financial decisions with confidence.
          </p>
        </div>

        <div
          data-aos="fade-up"
          style={getStyle(3)}
          className="about-image-wrapper">
          <img loading="lazy" src={network} alt="" />
        </div>

        <div className="about-section2">
          <p data-aos="fade-up" className="p-tag-header">
            Streamlined
          </p>
          <h1 data-aos="fade-up">
            How We Simplify Your Visa and Financial Needs
          </h1>
          <p data-aos="fade-up" className="p-tag-writeUp">
            At Holy-Field, we guide you through every step of the visa and
            financial processes. Our dedicated team ensures that your
            documentation is handled efficiently and accurately.
          </p>
        </div>

        <div className="about-card-wrapper">
          <div className="about-card-container">
            <div data-aos="fade-up" className="about-card-image-wrapper">
              <img src={submission} alt="" />
            </div>
            <h1 data-aos="fade-up">
              Step 1: Initial Consultation and Assessment
            </h1>
            <p data-aos="fade-up">
              We begin with a thorough consultation to understand your specific
              needs.
            </p>
          </div>

          <div className="about-card-container">
            <div data-aos="fade-up" className="about-card-image-wrapper">
              <img src={consultation} alt="" />
            </div>
            <h1 data-aos="fade-up">
              Step 2: Documentation Preparation and Review
            </h1>
            <p data-aos="fade-up">
              Our experts assist you in gathering and reviewing all necessary
              documents.
            </p>
          </div>

          <div className="about-card-container">
            <div data-aos="fade-up" className="about-card-image-wrapper">
              <img src={review} alt="" />
            </div>
            <h1 data-aos="fade-up">Step 3: Submission and Follow-Up</h1>
            <p data-aos="fade-up">
              We handle the submission process and keep you updated on the
              progress.
            </p>
          </div>
        </div>
      </div>
      <Testimonial />
    </>
  );
}

export default About;
