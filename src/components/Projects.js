import React from "react";
import { prjData } from "./ProjectsData"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <div className="projects-wrapper" id="projects-section">
      <div className="container ">
        <h2 className="prjTitle mb-5">My Projects</h2>
        <Slider {...settings}>
          {
            prjData.map((item, index) => (
              <div className="card text-white bg-dark border-secondary" style={{ width: "18rem" }} key={index}>
                <img
                  className="card-img-top"
                  src={item.img}
                  alt="projectImg"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    {item.description}
                  </p>
                  <hr />
                  <p className="card-text lead">
                    {item.techUsed}
                  </p>
                  <a
                    className="btn slider-button"
                    href={item.URL}
                    target="_blank"
                  >
                    See code
                  </a>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
