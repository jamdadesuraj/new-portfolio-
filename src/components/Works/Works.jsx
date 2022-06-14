import React, { useContext } from "react";
import "./Works.css";
import html from "../../img/html.png";
import css from "../../img/css.png";
import react from "../../img/react1.png";
import js from "../../img/js.png";
import node from "../../img/node.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Technology</span>
          <spane>
            Currently working as MERN stack web and mobile developer.
            <br />
            Developed an ecommerce website for client with the dashboard for
            <br /> managing the products, managing reviews, users, payment etc.
            <br />
            Integrated the web app with backend services to create new user{" "}
            <br />
            onboarding application with dynamic form content.
            <br />I stretch my mental capacity to develope UI as per the given
            designs.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={html} alt="" />
          </div>
          <div className="w-secCircle">
            <div className="w-secCircle1">
              <img src={css} alt="" />
            </div>
          </div>
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={js} alt="" />
          </div>
          <div className="w-secCircle">
            <div className="w-secCircle1">
              {" "}
              <img src={node} alt="" />
            </div>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
