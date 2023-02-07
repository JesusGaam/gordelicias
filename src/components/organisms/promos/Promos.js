import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import "react-awesome-slider/dist/styles.css";
import "./Promos.scss";

import imagen1 from "img/carruselPromos/carrusel-comadres.jpg";
import imagen2 from "img/carruselPromos/promo-3x49.jpg";
import imagen3 from "img/carruselPromos/carrusel-precio-especial.jpg"; // Borrar
import imagen4 from "img/carruselPromos/promo-horario-servicio.jpg";

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
        <img className="background" src={imagen1} />
      </div>
      <div className="carousel-item">
        <img className="background" src={imagen2} />
      </div>
      <div className="carousel-item">
        <img className="background" src={imagen3} />
      </div>
      <div className="carousel-item">
        <img className="background" src={imagen4} />
      </div>
    </AutoplaySlider>
  );
};

export default Promos;
