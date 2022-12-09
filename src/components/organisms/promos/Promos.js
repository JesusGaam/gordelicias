import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import "react-awesome-slider/dist/styles.css";
import "./Promos.scss";


import diaMuertosImg from "img/carrusel-tienda-online.jpg"; // Borrar
import promo1Img from "img/promo-3x49.jpg";
import paquete3Img from "img/carrusel-giveaway.jpg"; // Borrar
import paquete6Img from "img/carrusel-paquetes.jpg"; // Borrar
import paquete10Img from "img/carrusel-precio-especial.jpg"; // Borrar
import horariosImg from "img/promo-horario-servicio.jpg";

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
        <img className="background" src={diaMuertosImg} />
      </div>
      <div className="carousel-item">
        {/* <img className="principal" src={promo1Img} /> */}
        <img className="background" src={promo1Img} />
      </div>
      <div className="carousel-item">
        {/* <img className="principal" src={promo2Img} /> */}
        <img className="background" src={paquete3Img} />
      </div>
      <div className="carousel-item">
        {/* <img className="principal" src={promo2Img} /> */}
        <img className="background" src={paquete6Img} />
      </div>
      <div className="carousel-item">
        {/* <img className="principal" src={promo2Img} /> */}
        <img className="background" src={paquete10Img} />
      </div>
      <div className="carousel-item">
        {/* <img className="principal" src={promo3Img} /> */}
        <img className="background" src={horariosImg} />
      </div>
    </AutoplaySlider>
  );
};

export default Promos;
