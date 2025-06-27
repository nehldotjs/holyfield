import React, { useState } from "react";
import "../styles/cornerBtn.css";
import { AiOutlineMessage } from "react-icons/ai";

function CorneredButton() {
  const [isBtnClicked, setIsButtonClicked] = useState(false);
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
          <h1>HELLO WORLD</h1>
        </div>
      </div>
    </div>
  );
}

export default CorneredButton;
