import React, { useEffect, useState } from "react";
import "./Pricing.scss";
import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";
import iconTop from "../assets/images/iconTop.svg";
import iconStar from "../assets/images/iconStar.svg";
import iconLike from "../assets/images/iconLike.svg";
import iconSale from "../assets/images/iconSale.png";
import Modal from "../components/Modal";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Pricing = () => {
  useEffect(() => {
    console.log("Window innerWidth:", window.innerWidth);
  }, []);

  const [counterOn, setCounterOn] = useState(false);

  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hàm xử lý sự kiện hover vào card
  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  // Hàm xử lý sự kiện hover rời khỏi card
  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Hàm xử lý sự kiện đóng modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.chatgpt.aichat.gpt3.aichatbot",
      "_blank"
    );
  };

  return (
    <>
      <div className="container pricing-container">
        <div className="header">
          <p className="header-title">Get started now!</p>
          <p className="header-desc">Free to use. Simple to try</p>
        </div>

        <div className="wrapper">
          <div
            className="card"
            onMouseEnter={() => handleMouseEnter("limited-card-button")}
            onMouseLeave={handleMouseLeave}
          >
            <p className="card-title">Limited</p>
            <p className="card-price">Free</p>
            <p className="card-bill">Time-Limited Plan</p>
            <button
              id="limited-card-button"
              className="card-button"
              onClick={handleOpenModal}
            >
              {hoveredCardId === "limited-card-button"
                ? "SUBSCRIBE"
                : "GET STARTED"}
            </button>
            <ul className="card-features">
              <li className="card-feature">
                <img src={icon1} alt="icon1" /> Free 5 first uses
              </li>
              <li className="card-feature">
                <img src={icon2} alt="icon2" />{" "}
                <p>
                  No access to <strong>GPT-4o</strong>
                </p>
              </li>
              <li className="card-feature">
                <img src={icon2} alt="icon2" />{" "}
                <p>
                  <strong>Limited</strong> Questions & Answers
                </p>
              </li>
              <li className="card-feature">
                <img src={icon2} alt="icon2" />
                <p>
                  {" "}
                  Use with <strong>Ads</strong> Experiences
                </p>
              </li>
              <li className="card-feature">
                <img src={icon2} alt="icon2" />{" "}
                <p>
                  No access to <strong>new features</strong>
                </p>
              </li>
            </ul>
          </div>
          <div
            className="card premium yearly"
            onMouseEnter={() => handleMouseEnter("yearly-card-button")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="iconSale">
              {" "}
              <img src={iconSale} alt="" />
            </div>

            <p className="card-title">Yearly Premium</p>
            <p className="card-price">$2.19</p>
            <p className="card-description">per month</p>
            <p className="card-bill">Billed as $25.99 per year</p>
            <button
              id="yearly-card-button"
              className="card-button"
              onClick={handleButtonClick}
            >
              {hoveredCardId === "yearly-card-button"
                ? "SUBSCRIBE"
                : "GET STARTED"}
            </button>
            <ul className="card-features">
              <li className="card-feature card-feature1">
                {/* <img src={icon1} alt="icon1" />{" "} */}
                <p>
                  <strong>Access to GPT-4o</strong>
                </p>
              </li>
              <li className="card-feature">
                <img src={icon1} alt="icon1" /> Faster & more accurate answers
              </li>
              <li className="card-feature">
                <img src={icon1} alt="icon1" />{" "}
                <p>
                  <strong>Unlimited</strong> have unlimited dialogues
                </p>
              </li>
              <li className="card-feature">
                <img src={icon1} alt="icon1" /> No ads enjoy without any ads
              </li>
              <li className="card-feature">
                <img src={icon1} alt="icon1" />{" "}
                <p>
                  Early access to <strong>new features</strong> more convenient
                </p>
              </li>
              <li className="card-feature">
                <img src={icon1} alt="icon1" /> More economical
              </li>
            </ul>
          </div>
          <div
            className="card premium monthly"
            onMouseEnter={() => handleMouseEnter("monthly-card-button")}
            onMouseLeave={handleMouseLeave}
          >
            <p className="card-title">Weekly Premium</p>
            <p className="card-price">$1.99</p>
            <p className="card-description">per week</p>
            <p className="card-bill">Discount Price - save 10%</p>
            <button
              id="yearly-card-button"
              className="card-button"
              onClick={handleButtonClick}
            >
              {hoveredCardId === "monthly-card-button"
                ? "SUBSCRIBE"
                : "GET STARTED"}
            </button>
            <ul className="card-features">
              <li className="card-feature card-feature1">
                {/* <img src={icon1} alt="icon1" />{" "} */}
                <p>
                  <strong>Access to GPT-4o</strong>
                </p>
              </li>
              <li className="card-feature">
                <img src={icon1} alt="icon1" /> Faster & more accurate answers
              </li>
              <li className="card-feature">
                <img src={icon1} alt="icon1" />{" "}
                <p>
                  <strong>Unlimited</strong> have unlimited dialogues
                </p>
              </li>
              <li className="card-feature">
                <img src={icon1} alt="icon1" /> No ads enjoy without any ads
              </li>
              <li className="card-feature">
                <img src={icon1} alt="icon1" />{" "}
                <p>
                  Early access to <strong>new features</strong> more convenient
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="content-header">
            <div className="content-title">
              Trusted By over 7 million users worldwide
            </div>
            <div className="content-desc">
              Our AI assistant can help you generate stunning visuals, write
              compelling content, and boost your creativity.
            </div>
            <div className="content-desc">
              Whether you're working, learning, or brainstorming, just ask and
              get instant results.
            </div>
          </div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="content-intro">
              <div className="intro-item">
                <div className="intro-icon">
                  <img src={iconTop} alt="" />
                </div>
                <div className="intro-info">
                  <p className="info-title">Top app</p>
                  <p className="info-text">Top ranking on the</p>
                  <p className="info-text">Google Play</p>
                </div>
              </div>
              <div className="intro-item">
                <div className="intro-icon">
                  <img src={iconStar} alt="" />
                </div>
                <div className="intro-info">
                  <p className="info-title">
                    {counterOn && (
                      <CountUp end={4.8} duration={2} decimals={1} />
                    )}
                    +
                  </p>
                  <p className="info-text">Popular among users, with a 4.8+</p>
                  <p className="info-text">Google Play Store rating</p>
                </div>
              </div>
              <div className="intro-item">
                <div className="intro-icon">
                  <img src={iconLike} alt="" />
                </div>
                <div className="intro-info">
                  <p className="info-title">                    {counterOn && (
                      <CountUp end={7} duration={3} separator="," />
                    )}
                    M+</p>
                  <p className="info-text">Over 7M+ ASK AI</p>
                  <p className="info-text">requests Daily</p>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>

        <div className="footer">
          <div className="footer-text">
            © 2022 Prox Global. All Rights Reserved.
          </div>
        </div>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
};

export default Pricing;
