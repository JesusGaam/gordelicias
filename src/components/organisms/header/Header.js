import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import "react-awesome-slider/dist/styles.css";
import "./Header.scss";

import orangeImg from "img/gordita.png";
import gorditaImg from "img/carrusel-header-orange.jpg";
import gordita2Img from "img/carrusel-gordita.png";

const Header = () => {
  return (
    <AutoplaySlider
      className={"carousel-header"}
      play={true}
      cancelOnInteraction={true} // should stop playing on user interaction
      interval={3000}
      bullets={false}
    >
      <div className="carousel-item">
        <a href="#item1">
          <img className="background" src={gorditaImg} />
          <img className="principal" src={orangeImg} />
        </a>
      </div>
      <div className="carousel-item">
        <a href="#item2">
          <img className="background" src={gorditaImg} />
          <img className="principal" src={gordita2Img} />
        </a>
      </div>
    </AutoplaySlider>
  );
};

export default Header;
