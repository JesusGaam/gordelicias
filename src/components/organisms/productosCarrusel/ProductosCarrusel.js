import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import "react-awesome-slider/dist/styles.css";
import "./ProductosCarrusel.scss";

import LeftArrow from "img/left-arrow.svg";
import RightArrow from "img/right-arrow.svg";

import carousel1 from "img/carrusel-taza.png";
import carousel2 from "img/carousel-1.png";
import carousel3 from "img/carousel-2.png";
import carousel4 from "img/carousel-3.png";
import carousel5 from "img/carrusel-burrito.png";
import carousel6 from "img/carousel-gorditas-1.png";
import carousel7 from "img/carousel-gorditas-2.png";
import carousel8 from "img/carousel-gorditas-3.png";

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
      bullets={false}
    >
      <div className="carousel-item">
        <img className="principal" src={carousel1} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel2} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel3} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel4} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel5} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel6} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel7} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel8} />
      </div>
    </AutoplaySlider>
  );
};

export default ProductosCarrusel;
