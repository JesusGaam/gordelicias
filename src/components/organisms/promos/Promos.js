import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import "react-awesome-slider/dist/styles.css";
import "./Promos.scss";

import promo1Img from "img/promo-3x49.jpg";
import promo2Img from "img/promo-delicombos.jpg";
import promo3Img from "img/promo-horario-servicio.jpg";

const Promos = () => {
  return (
    <AutoplaySlider
      className={"carousel-header"}
      play={true}
      cancelOnInteraction={true} // should stop playing on user interaction
      interval={3000}
      bullets={false}
    >
      <div className="carousel-item">
        {/* <img className="principal" src={promo1Img} /> */}
        <img className="background" src={promo1Img} />
        <a href="#item1"></a>
      </div>
      <div className="carousel-item">
        <a href="#item2">
          {/* <img className="principal" src={promo2Img} /> */}
          <img className="background" src={promo2Img} />
        </a>
      </div>
      <div className="carousel-item">
        <a href="#item2">
          {/* <img className="principal" src={promo3Img} /> */}
          <img className="background" src={promo3Img} />
        </a>
      </div>
    </AutoplaySlider>
  );
};

export default Promos;
