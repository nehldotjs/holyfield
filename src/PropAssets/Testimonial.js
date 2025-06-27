import React from 'react'
import Carousel from './customs/Carousel';
import TestimonialCards from './customs/TestimonialCards';

function Testimonial() {
    const testimonials = [
      {
        name: "Amaka Okoro",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        header: "Visa Approved Effortlessly!",
        comment:
          "Holy Field helped me with backdated bank statements and a professional sponsorship letter. My UK student visa was approved in record time. Their financial support service is top-notch!"
      },
      {
        name: "David Akinwale",
        img: "https://randomuser.me/api/portraits/men/72.jpg",
        header: "Quick Business Loan for Expansion",
        comment:
          "I secured an uncollateralized business loan for my logistics company through their expert guidance. The process was seamless and faster than any traditional bank I've used."
      },
      {
        name: "Tosin Bello",
        img: "https://randomuser.me/api/portraits/men/44.jpg",
        header: "Proof of Funds That Actually Works!",
        comment:
          "Their Proof of Funds service was exactly what I needed for my Canada visa. It looked authentic, professional, and met every requirement. I highly recommend Holy Field!"
      },
      {
        name: "Chioma Adeyemi",
        img: "https://randomuser.me/api/portraits/women/12.jpg",
        header: "LPO Financing Made Simple",
        comment:
          "I got LPO financing in just a few days, which helped me fulfill a government supply contract. Holy Field didn’t just support me—they helped me win big."
      },
      {
        name: "Kelvin Nwachukwu",
        img: "https://randomuser.me/api/portraits/men/90.jpg",
        header: "Corporate Account Setup with Ease",
        comment:
          "I needed a corporate account statement for my business visa. Holy Field prepared everything, including CAC docs and tax clearance. It was all perfectly packaged."
      },
      {
        name: "Fatima Mohammed",
        img: "https://randomuser.me/api/portraits/women/35.jpg",
        header: "UK Pension Loan Secured!",
        comment:
          "As a retiree applying for a UK pension-backed loan, I was confused until I found Holy Field. They handled all my documents and made the process stress-free."
      }
    ];
    
  return (
    <div className="home-section6-testimonial-wrapper">
      <Carousel render={TestimonialCards} data={testimonials} />
    </div>
  );
}

export default Testimonial
