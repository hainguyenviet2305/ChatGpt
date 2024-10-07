import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlideshow.scss";
import left from "../assets/images/left2.png";
import right from "../assets/images/right2.png";

const CardSlideshow = () => {
  const sliderRef = useRef(null);

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-prev" onClick={onClick}>
        {/* Thay thế bằng hình ảnh hoặc biểu tượng mũi tên của bạn */}
        <img src={left} />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-next" onClick={onClick}>
        {/* Thay thế bằng hình ảnh hoặc biểu tượng mũi tên của bạn */}
        <img src={right} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <div className="card-slideshow-container">
        <div className="card-slideshow">
          <Slider ref={sliderRef} {...settings}>
            <div className="card-wrapper">
              <div className="card-container">
                <p className="card-name">Alex San</p>
                <p className="card-star">⭐⭐⭐⭐⭐</p>
                <p className="card-comment">
                  Everything about this app represents innovation and it's still
                  in its infancy. It's very scary, laugh out loud, all jokes
                  aside, this is a great tool to use that gives you quite a few
                  benefits that I highly recommend
                </p>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card-container">
                <p className="card-name">Sapphire</p>
                <p className="card-star">⭐⭐⭐⭐</p>
                <p className="card-comment">
                  The Character AI in this app is truly impressive. I can create
                  unique characters and have engaging, lifelike conversations
                  with them!
                </p>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card-container">
                <p className="card-name">Salome</p>
                <p className="card-star">⭐⭐⭐⭐⭐</p>
                <p className="card-comment">
                  The chat function is truly excellent! I've tried many other
                  apps, but none can respond as naturally and intelligently as
                  this one.
                </p>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card-container">
                <p className="card-name"> Zillah</p>
                <p className="card-star">⭐⭐⭐⭐⭐</p>
                <p className="card-comment">
                  This app has become an indispensable part of my work and study
                  routine. Thank you for creating such a wonderful app!
                </p>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card-container">
                <p className="card-name">Donald</p>
                <p className="card-star">⭐⭐⭐⭐</p>
                <p className="card-comment">
                  Thank you for creating such a wonderful app! Very like it!
                </p>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card-container">
                <p className="card-name">Mia</p>
                <p className="card-star">⭐⭐⭐⭐⭐</p>
                <p className="card-comment">
                  The app runs smoothly, with no lag or bugs. Both the chat
                  function and Character AI are very impressive!
                </p>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card-container">
                <p className="card-name">Christina</p>
                <p className="card-star">⭐⭐⭐⭐⭐</p>
                <p className="card-comment">
                  Very fast and convenient. AI Image Generation is the best!
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CardSlideshow;
