import React from "react";
import "./Modal.scss";
import icon1 from "../assets/images/icon1.svg";
import iconTrial from "../assets/images/iconTrial.png";

const Modal = ({ onClose }) => {
  const handleButtonClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.chatgpt.aichat.gpt3.aichatbot', '_blank');
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="iconTrial">
            <img src={iconTrial} alt="" />
        </div>
        <div className="modal-content">
          <p className="modal-title">3-day free</p>
          <p className="modal-price">
            <span className="modal-original-price">$71.90</span> $0
          </p>
          <ul className="modal-features">
            <li className="modal-check">
              <img src={icon1} alt="icon1" />
              <p>
                <strong>Unlimited</strong> ⚡ Chat with AI
              </p>
            </li>
            <li className="modal-check">
              <img src={icon1} alt="icon1" />
              <p>
                <strong>SuperAI</strong> and Mentos Supported
              </p>
            </li>
            <li className="modal-check">
              <img src={icon1} alt="icon1" />
              <p>Chat PDF, Flashcards and More Features</p>
            </li>
            <li className="modal-check">
              <img src={icon1} alt="icon1" />
              <p><b>Multi-Platform VIP Membership</b></p>
            </li>
          </ul>
          <button className="modal-button" onClick={handleButtonClick}>Start 3 Days Free Trial</button>
          <p className="modal-note">
            $0 USD Payment Today, Can be cancelled anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
