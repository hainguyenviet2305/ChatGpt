import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FaqShow.scss";
import imgQA from "../assets/images/imgQA.png";
import left from "../assets/images/left2.png";
import right from "../assets/images/right2.png";

const FaqShow = () => {
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
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="faq-slideshow-container">
      <div className="faq-slideshow">
        <Slider ref={sliderRef} {...settings}>
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-header">
                <img src={imgQA} alt="FAQ" />
                What is the Chatbot AI app?
              </div>
              <p className="faq-content">
                Chatbot AI is an intelligent virtual assistant designed to help
                users generate content, answer questions, and provide creative
                insights using advanced AI models. Whether it's writing,
                business, or health-related inquiries, the chatbot delivers
                instant and personalized responses.
              </p>
            </div>
          </div>

          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-header">
                <img src={imgQA} alt="FAQ" />
                How do I use Chatbot AI?
              </div>
              <p className="faq-content">
                You can use Chatbot AI by typing your queries or prompts into
                the chat interface. The AI will then provide suggestions,
                solutions, or generate content based on your input. Available
                for iOS, Android, and web platforms, it’s easy to get started
                with just one account.
              </p>
            </div>
          </div>

          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-header">
                <img src={imgQA} alt="FAQ" />
                Is Chatbot AI free to use?
              </div>
              <p className="faq-content">
                Yes, Chatbot AI offers a free tier with access to basic
                features. For advanced functionalities, such as unlimited
                content generation and more complex requests, you can upgrade to
                our premium plan.
              </p>
            </div>
          </div>

          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-header">
                <img src={imgQA} alt="FAQ" />
                What can Chatbot AI help me with?
              </div>
              <p className="faq-content">
                Chatbot AI assists with a wide range of tasks, from writing
                press releases, essays, and video descriptions, to providing
                health tips, job advice, and even cooking recipes. It’s designed
                to enhance productivity and creativity in various areas.
              </p>
            </div>
          </div>

          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-header">
                <img src={imgQA} alt="FAQ" />
                Is Chatbot AI available in multiple languages?
              </div>
              <p className="faq-content">
                Yes, Chatbot AI supports over 100 languages, making it
                accessible to users worldwide.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FaqShow;
