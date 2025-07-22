import React, { useState } from "react";
import { toast } from "react-toastify";
import "../styles/contact.css";

import contactSvg from "../Assets/svg/contact-us-svg.svg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/nelsonosuya11@gmail.com",
        {
          method: "POST",
          body: payload
        }
      );

      const result = await res.json();

      if (result.success === "true" || result.result === "success") {
        toast.success("Message sent successfully!");
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Network error. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="contact-form-container fade-in">
      <div className="contact-svg-wrapper">
        <div className="contact-write-up">
          <h1>
            Get in Touch with <br />
            <span>Holy-Field</span>
          </h1>
          <p>
            Whether you have a question, need support, or just want to say hello
            — we're here to help. Your satisfaction is our priority, and we look
            forward to hearing from you!
          </p>
        </div>
        <img src={contactSvg} alt="" />

        <p className="contact-subText">
          Reach out to us anytime and our team will get back to you.
        </p>
      </div>
      <div className="contactForm-wrapper">
        {submitted
          ? <p className="success-message">
              ✅ Thank you for reaching out. We'll get back to you shortly!
            </p>
          : <form onSubmit={handleSubmit} className="book-call-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="phone"
                  name="phone"
                  className="form-input"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Your Message"
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="form-button"
               >
                Send Message
              </button>
            </form>}
      </div>
    </div>
  );
}
