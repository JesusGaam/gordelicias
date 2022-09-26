import React from "react";
import "./OrdenaAqui.scss";

import PensandoGordear from "img/pensando-gordear.svg";
import MotoNela from "img/nela-moto.png";
import Carretera from "img/carretera.svg";

const OrdenaAqui = () => {
  return (
    <div className="container order-here">
      <PensandoGordear className="gordear-text" />
      <Carretera className="carretera" />
      <img src={MotoNela} className="nela-moto" />
      <p>Ordena en linea y tenlas pronto en tus manos..</p>
      <div className="link-container">
        <a href="https://order.foodbot.ai/gordelicias" target="_blank">¡ORDENA AQUÍ!</a>
      </div>
    </div>
  );
};
export default OrdenaAqui;
