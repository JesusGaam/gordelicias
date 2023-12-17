import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import "react-awesome-slider/dist/styles.css";
import "./Promos.scss";

import imagen0 from "img/carruselPromos/atole-del-mes.png";
import imagen1 from "img/carruselPromos/burrito-todo-dia.png";
import imagen2 from "img/carruselPromos/cafe-especialidad.png";
import imagen3 from "img/carruselPromos/promo-3x49.jpg";
import imagen4 from "img/carruselPromos/promo-3x49-gorditas.jpg";
import solLunaVideo from "video/sol-luna.mp4"

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
        <video autoPlay muted playsInline loop className="video">
          <source src={solLunaVideo} type="video/mp4" />
          No se puede reproducir video
        </video>
      </div>
      <div className="carousel-item">
        <img className="background" src={imagen0} />
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
      <div className="carousel-item">
        <img className="background" src={imagen4} />
      </div>
    </AutoplaySlider>
  );
};

export default Promos;
