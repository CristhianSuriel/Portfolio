import React from "react";
import "../App.css";
import headshotImg from "../images/headshot.jpg";

const About = () => {
  return (
    <div className="about-wrapper" id="about-section">
      <div className="container">
        <div className="row">
          <div className="headshot col-lg-4 col-5 my-1">
            <img
            className="rounded-circle"
              src={headshotImg}
              alt="headshot"
            />
          </div>
          <div className="about-info-container col-lg-8 col-12">
            <h2 >Me, Myself &amp; I</h2>
            <p className="lead">
              I'm a Full Stack Developer located in New York. I have a serious
              passion for making responsive websites, animations and creating intuitive, dynamic user experiences.
            </p>
            <br />
            <p className="lead">
              Born in the Dominican Republic I first came to the United States when I was just 13. My experiences since then have led me to be a well-organised person, problem solver, independent employee with
              high attention to detail, and ambition. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
