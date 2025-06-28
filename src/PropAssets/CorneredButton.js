import React, { useState } from "react";
import "../styles/cornerBtn.css";
import { AiOutlineMessage } from "react-icons/ai";
import { TbBrandWhatsappFilled } from "react-icons/tb";

function CorneredButton() {
  const [isBtnClicked, setIsButtonClicked] = useState(false);

  const faqs = [
    {
      question: "What is HOLY-FIELD ?",
      answer:
        "HOLY-FIELD is a financial solutions company that leverages digital innovation to solve everyday financial challenges. We offer tailored financial support services including loan options, investment opportunities, flexible savings packages, and value-added utilities such as transfers and bill payments."
    },
    {
      question: "How is HOLY-FIELD different from other fintech platforms?",
      answer:
        "HOLY-FIELD stands out through its personalized services, fast processes, and outstanding customer experience:\n\n" +
        "• Personalized Services: From custom account numbers to flexible repayment options, we prioritize solutions that adapt to your needs. Services like Loan Friends and Pay For Me offer even more flexibility.\n\n" +
        "• Speed and Convenience: Our processes for loan applications, investments, and bill payments are designed to be quick and seamless.\n\n" +
        "• Customer-Centric Support: Our responsive support team—available via WhatsApp and email—ensures that your questions are answered promptly and your needs are met efficiently."
    },
    {
      question: "How can I get started with HOLY-FIELD?",
      answer:
        "Getting started is easy! Simply create an account through our website or mobile application. All our services are accessible on both platforms.\n\n" +
        "Need assistance? Reach out to us on WhatsApp or send an email to info@holyfield.com. We’ll be happy to guide you every step of the way."
    }
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="sideButtonWrapper">
      <button
        onClick={() => setIsButtonClicked(!isBtnClicked)}
        className="sideButtonContainer">
        <AiOutlineMessage className="messageIcon" />
      </button>

      <div
        className={
          isBtnClicked
            ? "cta-context-wrapper"
            : "cta-context-wrapper cta-Clicked "
        }>
        <div className="cta-context-backgroundOverlay"></div>
        <div className="cta-container">
          <a
            href="https://wa.me/2348123323899?text=Hi%2C%20my%20name%20is%20[Your%20Name].%20I%27m%20interested%20in%20learning%20more%20about%20your%20services%20and%20how%20you%20can%20assist%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn-wrapper">
            <TbBrandWhatsappFilled className="whatsappIcon" />
            <h2>Chat with Us on WhatsApp</h2>
          </a>
          <div className="faq-wrapper">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 onClick={() => toggleFaq(index)} className="faq-question">
                  {faq.question}
                </h3>
                {activeIndex === index && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default CorneredButton;
