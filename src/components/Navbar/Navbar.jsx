import React, { useContext } from "react";
import Logo from "../../img/logo.png";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { themeContext } from "../../Context";
const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div className="n-name">
          <img src={Logo} alt="logo" />
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: darkMode ? "1px solid white" : "",
          }}
        >
          <span
            style={{
              backgroundColor: darkMode ? "white" : "",
            }}
            class="navbar-toggler-icon"
          ></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li class="nav-item ">
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li class="nav-item">
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li class="nav-item">
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
            <li class="nav-item ">
              <Toggle />
            </li>
          </ul>

          <form class="form-inline  my-lg-0">
            <Link to="contact" spy={true} smooth={true}>
              <button className="button n-button mx-5">Contact</button>
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
