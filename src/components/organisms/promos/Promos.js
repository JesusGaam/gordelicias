import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import "react-awesome-slider/dist/styles.css";
import "./Promos.scss";

import imagen1 from "img/carruselPromos/promo-3x49.jpg";
import imagen2 from "img/carruselPromos/promo-3x49-gorditas.jpg";
import imagen3 from "img/carruselPromos/carrusel-precio-especial.jpg"; // Borrar

const Promos = () => {

  useEffect(() => {
    document.querySelector('video').playbackRate = 2.0;
    document.querySelector('video').play();
  }, [])
  return (
    <AutoplaySlider
      className={"carousel-header"}
      play={true}
      cancelOnInteraction={true} // should stop playing on user interaction
      interval={3000}
      bullets={false}
    >
      <div className="carousel-item">
        <video autoplay muted playsinline loop className="video">
          <source src="https://gordelicias.com.mx/sol-luna.mp4" type="video/mp4" />
          No se puede reproducir video
        </video>
      </div>

      <div className="carousel-item">
        <img className="background" src={imagen1} />
      </div>
      <div className="carousel-item">
        <img className="background" src={imagen2} />
      </div>
      <div className="carousel-item">
        <img className="background" src={imagen3} />
      </div>
    </AutoplaySlider>
  );
};

export default Promos;
