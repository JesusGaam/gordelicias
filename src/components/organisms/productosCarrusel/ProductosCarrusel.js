import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import "react-awesome-slider/dist/styles.css";
import "./ProductosCarrusel.scss";

import LeftArrow from "img/left-arrow.svg";
import RightArrow from "img/right-arrow.svg";

import carousel1 from "img/carruselProductos/carrusel-taza.png";
import carousel5 from "img/carruselProductos/burro.png";
import carousel6 from "img/carruselProductos/carrusel-burrito.png";
import carousel7 from "img/carruselProductos/bistec-chicharron.png";
import carousel8 from "img/carruselProductos/champinon-chorizo.png";
import carousel9 from "img/carruselProductos/frijoles-rajas.png";
import carousel10 from "img/carruselProductos/mole-nopales.png";
import carousel11 from "img/carruselProductos/queso-picadillo.png";
import carousel12 from "img/carruselProductos/tinga-birria.png";

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
      {/* <div className="carousel-item">
        <img className="principal" src={carousel2} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel3} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel4} />
      </div> */}
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
      <div className="carousel-item">
        <img className="principal" src={carousel9} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel10} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel11} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel12} />
      </div>

      {/* <div className="carousel-item">
        <img className="principal" src={carousel13} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel14} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel15} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel16} />
      </div>
      <div className="carousel-item">
        <img className="principal" src={carousel17} />
      </div> */}
    </AutoplaySlider>
  );
};

export default ProductosCarrusel;
