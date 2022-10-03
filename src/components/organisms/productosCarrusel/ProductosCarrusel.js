import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import "react-awesome-slider/dist/styles.css";
import "./ProductosCarrusel.scss";

import LeftArrow from "img/left-arrow.svg";
import RightArrow from "img/right-arrow.svg";

import orangeImg from "img/gordita.png";
import gordita2Img from "img/carrusel-gordita.png";

const ProductosCarrusel = () => {
  return (
    <AutoplaySlider
      className={"product-carousel"}
      play={true}
      cancelOnInteraction={true} // should stop playing on user interaction
      interval={3000}
      organicArrows={false}
      buttonContentLeft={<LeftArrow width="80px" />}
      buttonContentRight={<RightArrow width="80px" />}
    >
      <div className="carousel-item">
        <img className="principal" src={orangeImg} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={gordita2Img} />
      </div>
    </AutoplaySlider>
  );
};

export default ProductosCarrusel;
