import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <a href="#header-section" className="up-arrow">
          <FontAwesomeIcon icon={faCaretUp} />
        </a>
        <div className="social">
          <a
            href="https://www.github.com/CristhianSuriel"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/cristhian-suriel/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="gosomewhere" target="_blank">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </div>
        <h5>Cristhian Suriel &copy;2021</h5>
      </div>
    </div>
  );
};

export default Footer;
