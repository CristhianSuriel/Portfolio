import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper" id="header-section">
      <div className="main-info">
        <h1>Hello, my name is Cristhian!</h1>
        <br />
        <div className="main-info2">
          <h2>I can help you with &nbsp;</h2>
          <Typed
            className="typed-text"
            strings={[
              "Web Development",
              "Front-end development",
              "Back-end development",
              "Databases",
              "Full-stack development",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
          />
        </div>
        <a href="#contact-section" className="btn-main-offer">Contact me</a>
      </div>
    </div>
  );
};

export default Header;
