import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "With Suraj help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could  be more happy with our new website! Thanks Suraj!.",
    },
    {
      img: profilePic2,
      review:
        "We re-did our website twice in a 12 month period. There was no comparison between the first company and Suraj. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Suraj the first time I would not have had to do it twice.",
    },
    {
      img: profilePic3,
      review:
        "We at Kee Service were very impressed with the all aspects of our new website. We would highly reccomend Suraj to anyone looking to build a new website..",
    },
    {
      img: profilePic4,
      review:
        "We re-did our website twice in a 12 month period. There was no comparison between the first company and Suraj. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Suraj the first time I would not have had to do it twice.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
