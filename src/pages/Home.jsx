import React, { useState } from "react";
import "./Home.scss";
import iconGgPlay from "../assets/images/iconGgPlay.png";
import light from "../assets/images/light.png";
import ratingStar from "../assets/images/ratingStar.svg";
import privacy from "../assets/images/privacy.png";
import logo from "../assets/images/contactLogo.svg";
import qr from "../assets/images/qr.png";
import sms from "../assets/images/sms.svg";
import phone from "../assets/images/phone.svg";
import location from "../assets/images/location.svg";
import Slideshow from "../components/Slideshow.JSX";
import MovingLines from "../components/MovingLines";
import icon1 from "../assets/images/icon1.svg";
import animation1 from "../animations/ani1.json";
import animation2 from "../animations/ani2.json";
import animation3 from "../animations/ani3.json";
import animation4 from "../animations/ani4.json";
import animation5 from "../animations/ani5.json";
import LottieAnimation from "../components/LottieAnimation";
import CardSlideshow from "../components/CardSlideShow";
import FaqShow from "../components/FaqShow";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { toast } from 'react-toastify';

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      toast.warning('Please enter your email');
      return;
    }

    toast.success('Thank you!');
    setEmail('');
  };

  const [email, setEmail] = useState('');



  const handleButtonClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.chatgpt.aichat.gpt3.aichatbot",
      "_blank"
    );
  };

  return (
    <>
      <div className="container">
        <div className="section1">
          <div className="content-left">
            <h1>AI Chat 4o</h1>
            <h2>Assistant Chatbot</h2>
            <p className="content-title">Free to use. Simple to try.</p>
            <p className="content-text">
              Our AI assistant can help you generate stunning visuals, write
              compelling content, and boost your creativity.
            </p>
            <p className="content-text">
              Whether you're working, learning, or brainstorming, just ask and
              get instant results.
            </p>

            <div className="iconGg">
              <img src={iconGgPlay} alt=""  onClick={handleButtonClick} style={{cursor : 'pointer'}}/>
            </div>
          </div>

          <div className="content-right">
            <Slideshow />
          </div>
        </div>

        <div className="section2">
          <MovingLines />
        </div>

        <div className="section-animation">
          <div className="ani ani1">
            <div className="animation">
              <LottieAnimation animationData={animation1} style={{ width: '501px', height: '575px' }}/>
            </div>

            <div className="content">
              <p className="content-title">Powered by ChatGPT & GPT-4 API</p>
              <li className="content-text">
                Our app is driven by the latest ChatGPT and GPT-4 technology,
                providing instant responses, innovative ideas, and fresh
                insights.
              </li>
              <li className="content-text">
                Available in over 100 languages, it ensures seamless
                communication and creativity, no matter where you are or what
                language you speak. 4o
              </li>
            </div>
          </div>
          <div className="ani ani2">
            <div className="content">
              <p className="content-title">AI Assistant for Any Tasks</p>
              <li className="content-text">
                Our AI Assistant supports you in a wide range of tasks, from
                Business, Writing, Health, Love, Cooking, Law, Education, to
                Interviewing and Job Seeking.
              </li>
              <li className="content-text">
                With its ability to handle diverse tasks, the AI assistant helps
                streamline your daily activities and provides smart suggestions
                to enhance your productivity.
              </li>
            </div>
            <div className="animation">
              <LottieAnimation
                animationData={animation2}
                style={{ width: 501, height: 575 }}
              />
            </div>
          </div>
          <div className="ani ani3">
            <div className="animation">
              <LottieAnimation
                animationData={animation3}
                style={{ width: 501, height: 575 }}
              />
            </div>

            <div className="content">
              <p className="content-title">Fast and Accurate</p>
              <li className="content-text">
                Our AI chatbot provides fast and accurate answers to any
                question, leveraging the latest advancements in AI technology.
              </li>
              <li className="content-text">
                Whether it's boosting productivity, content creation, or
                generating innovative solutions, our AI ensures quick responses
                that help you stay ahead.
              </li>
            </div>
          </div>
          <div className="ani ani4">
            <div className="content">
              <p className="content-title">AI Image Generation</p>
              <li className="content-text">
                With the AI Image Generation feature, you can effortlessly
                create stunning visuals based on simple text prompts.
              </li>
              <li className="content-text">
                This tool is perfect for artists, designers, and content
                creators looking to quickly generate unique images tailored to
                their needs.
              </li>
              <li className="content-text">
                Simply describe what you envision, and the AI will handle the
                rest, producing high-quality visuals ready for use in any
                project.
              </li>
            </div>
            <div className="animation">
              <LottieAnimation
                animationData={animation4}
                style={{ width: 501, height: 575 }}
              />
            </div>
          </div>
          <div className="ani ani5">
            <div className="animation">
              <LottieAnimation
                animationData={animation5}
                style={{ width: 501, height: 575 }}
              />
            </div>

            <div className="content">
              <p className="content-title">Summarize Articles with Ease</p>
              <li className="content-text">
                Our AI-powered tool quickly summarizes long articles, PDFs, and
                documents, saving you time.
              </li>
              <li className="content-text">
                With just a simple upload, you'll get clear and concise
                summaries, helping you grasp key information faster without
                missing important details.
              </li>
              <li className="content-text">
                Perfect for students, professionals, and researchers alike!
              </li>
            </div>
          </div>
        </div>

        <div className="move">
          <div className="section-rating">
            <p className="rating-title">
              Join hundreds of millions of users and try our app today.
            </p>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
            <div className="rating-info">
                <div className="info-wrapper">
                  <p className="number">
                    {counterOn && (
                      <CountUp end={160000} duration={2} separator="," />
                    )}
                    +
                  </p>
                  <p className="text">Reviews</p>
                </div>
                <div className="info-wrapper">
                  <p className="number">
                    {counterOn && (
                      <CountUp end={4.8} duration={2} decimals={1} />
                    )}+

                    <img src={ratingStar} alt="star" />
                  </p>
                  <p className="text">User Ratings</p>
                </div>
                <div className="info-wrapper">
                  <p className="number">
                    {counterOn && (
                      <CountUp end={7000000} duration={2} separator="," />
                    )}
                    +
                  </p>
                  <p className="text">Users</p>
                </div>
            </div>
              </ScrollTrigger>

            <CardSlideshow />
          </div>

          <div className="section-faq">
            <p className="faq-title">
              <img src={light} alt="" />
              Frequently asked questions
            </p>

            <FaqShow />
          </div>
        </div>
        <div className="section-privacy">
          <div className="privacy-item">
            <div className="privacy-title">Privacy</div>
            <p className="privacy-content">
              <img src={icon1} alt="" />
              All data will be encrypted and secured. No one can access it
            </p>
            <p className="privacy-content">
              <img src={icon1} alt="" />
              All data will be transferred to AI as anonymous
            </p>
            <p className="privacy-content">
              <img src={icon1} alt="" />
              Information filtering, sensitive and personal information will be
              deleted and not stored.
            </p>
            <div className="privacy-img">
              <img src={privacy} alt="" />
            </div>
          </div>
        </div>
        <div className="section-footer">
          <div className="section-contact">
            <div className="contact-contact">
              <p className="contact-title">
                <img src={logo} alt="" />
                AI Chatbot 4o
              </p>
              <p className="contact-company">
                PROXGLOBAL INVESTMENT AND TECHNOLOGY DEVELOPMENT JOINT STOCK
                COMPANY
              </p>
              <div className="contact-infomation">
                <p className="infomation-item">
                  <img src={sms} alt="" />
                  Admin@proxglobal.com
                </p>
                <p className="infomation-item">
                  <img src={phone} alt="" />
                  (+84) 0904222689
                </p>
                <p className="infomation-item">
                  <img src={location} alt="" />
                  Floor 4, 60B Nguyen Huy Tuong street, Thanh Xuan, Ha Noi
                </p>
              </div>
            </div>

            <div className="contact-menu">
              <div className="menu-title">Menu</div>
              <div className="menu-page">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
              </div>
              <div className="menu-page">
                <Link to="/pricing" onClick={() => window.scrollTo(0, 0)}>Pricing</Link>
              </div>
            </div>

            <div className="contact-subcribe">
              <p className="subcribe-title">Subcribe</p>
              <form className="email-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your mail..."
                  className="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="send-button">
                  Send
                </button>
              </form>
              <p className="subcribe-desc">
                Sign up to get the latest information, new releases and more....
              </p>
              <div className="qr">
                <img src={qr} alt="" />
              </div>
            </div>
          </div>

          <p className="footer">© 2022 Prox Global. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
