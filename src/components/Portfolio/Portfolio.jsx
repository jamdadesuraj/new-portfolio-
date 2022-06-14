// import React, { Component } from "react";
import React, { useContext } from "react";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Portfolios from "../../img/portfoilo.png";
import Ecommerce from "../../img/ecommernce.png";
import food from "../../img/food delivery.png";
import cricket from "../../img/cricket .png";
import dcn from "../../img/dcn.png";
import fs from "../../img/fs.png";
import jw from "../../img/jw.png";
import education from "../../img/education.png";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <div className="portfolio" id="portfolio">
          {/* heading */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Recent Projects
          </span>
          <br />
          <span>Portfolio</span>
          <Slider {...settings}>
            <div>
              <img src={Portfolios} alt="portfolio" />
            </div>
            <div>
              <img src={Ecommerce} alt="ecommernce" />
            </div>
            <div>
              <img src={food} alt="food" />
            </div>
            <div>
              <img src={fs} alt="fs" />
            </div>
            <div>
              <img src={cricket} alt="cricket" />
            </div>
            <div>
              <img src={dcn} alt="dcn" />
            </div>
            <div>
              <img src={jw} alt="jw" />
            </div>
            <div>
              <img src={education} alt="education" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
