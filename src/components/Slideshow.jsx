import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slideshow.scss";
import right from "../assets/images/arrow-circle-right.png";
import left from "../assets/images/arrow-circle-left.png";
import image1 from "../assets/images/img1.png";
import image2 from "../assets/images/img2.png";
import image3 from "../assets/images/img3.png";
import image4 from "../assets/images/img4.png";
import image5 from "../assets/images/img5.png";

const Slideshow = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

  return (
    <div className="slideshow-ctn">
      <img src={left} alt="Previous" onClick={() => sliderRef.current.slickPrev()} className="arrow-button left-arrow"/>
      <div className="slideshow">
        <Slider ref={sliderRef} {...settings}>
          <div className="slide">
            <img src={image1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={image2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={image3} alt="Slide 3" />
          </div>
          <div className="slide">
            <img src={image4} alt="Slide 4" />
          </div>
          <div className="slide">
            <img src={image5} alt="Slide 5" />
          </div>
        </Slider>
      </div>
      <img src={right} alt="Next" onClick={() => sliderRef.current.slickNext()} className="arrow-button right-arrow"/>
    </div>
  );
};

export default Slideshow;