import React from "react";
import "../styles/about.css";
import Testimonial from "../PropAssets/Testimonial";

import consultation from "../Assets/svg/consultation.svg";
import review from "../Assets/svg/review.svg";
import submission from "../Assets/svg/submission.svg";

import network from "../Assets/images/NETWROKING.png";

function About() {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-context-Wrapper">
          <h1>
            Discover the Journey of Holy-Field: From Humble Beginnings to
            Industry Leader
          </h1>
          <p>
            Founded in 2023, Holy Field began as a focused venture with a simple
            goal: to empower individuals and businesses with access to tailored
            financial solutions that help them achieve more. Over time, we have
            evolved into a trusted provider of flexible loan services and
            financial documentation support, committed to meeting the changing
            needs of our growing client base. At Holy Field, we believe that
            everyone should be empowered to pursue their goals—whether it's
            expanding a business, managing personal growth, or preparing for
            international opportunities. We deliver this empowerment through
            accessible loan offerings and strategic financial assistance
            designed to support a wide range of personal and professional
            ambitions. While we do not issue or guarantee visas, we provide
            clients with key financial documentation—such as account summaries,
            income validation, tax records, and corporate filings—to support a
            wide range of personal, professional, and travel-related goals. With
            a clear commitment to excellence and client success, Holy Field
            continues to be a reliable partner for individuals and enterprises
            navigating financial decisions with confidence.
          </p>
        </div>

        <div className="about-image-wrapper">
          <img  loading="lazy" src={network} alt="" />
        </div>

        <div className="about-section2">
          <p className="p-tag-header">Streamlined</p>
          <h1>How We Simplify Your Visa and Financial Needs</h1>
          <p className="p-tag-writeUp">
            At Holy-Field, we guide you through every step of the visa and
            financial processes. Our dedicated team ensures that your
            documentation is handled efficiently and accurately.
          </p>
        </div>

        <div className="about-card-wrapper">
          <div className="about-card-container">
            <div className="about-card-image-wrapper">
              <img src={submission} alt="" />
            </div>
            <h1>Step 1: Initial Consultation and Assessment</h1>
            <p>
              We begin with a thorough consultation to understand your specific
              needs.
            </p>
          </div>

          <div className="about-card-container">
            <div className="about-card-image-wrapper">
              <img src={consultation} alt="" />
            </div>
            <h1>Step 2: Documentation Preparation and Review</h1>
            <p>
              Our experts assist you in gathering and reviewing all necessary
              documents.
            </p>
          </div>

          <div className="about-card-container">
            <div className="about-card-image-wrapper">
              <img src={review} alt="" />
            </div>
            <h1>Step 3: Submission and Follow-Up</h1>
            <p>
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
