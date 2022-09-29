import React from "react";
import "./About";
import myLogo from "../images/logo.PNG";
// REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-custom">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img className="logo" src={myLogo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#3d85c6" }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link
                  to="header-section"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={100}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about-section"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={100}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects-section"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={100}
                  className="nav-link"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={100}
                  className="nav-link"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
