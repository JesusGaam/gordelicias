import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import "react-awesome-slider/dist/styles.css";
import "./Header.scss";

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
          <img src="https://picsum.photos/800/600?random=1" />
        </a>
      </div>
      <div className="carousel-item">
        <a href="#item2">
          <img src="https://picsum.photos/800/600?random=2" />
        </a>
      </div>
      <div className="carousel-item">
        <a href="#item3">
          <img src="https://picsum.photos/800/600?random=3" />
        </a>
      </div>
    </AutoplaySlider>
  );
};

export default Header;
