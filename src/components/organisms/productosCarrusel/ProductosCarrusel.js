import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import "react-awesome-slider/dist/styles.css";
import "./ProductosCarrusel.scss";

import LeftArrow from "img/left-arrow.svg";
import RightArrow from "img/right-arrow.svg";

import platillo1 from "img/gordita.png";
import platillo2 from "img/carrusel-gordita.png";
import platillo3 from "img/carrusel-birria-nopales-picadillo.png";
import platillo4 from "img/carrusel-favoritas.png";
import platillo5 from "img/carrusel-res-birria-rajas.png";

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
        <img className="principal" src={platillo1} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={platillo2} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={platillo3} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={platillo4} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={platillo5} />
      </div>
    </AutoplaySlider>
  );
};

export default ProductosCarrusel;
