import React, { useState } from "react";
import "./Ingredientes.scss";
import ScrollPanel from "../ScrollPanel/ScrollPanel";
import IngredientesImg from "img/ingredientes.png";
import GorditaAbiertaImg from "img/gordita-abierta.png";

const Ingredientes = () => {
  const [ingredientsStyle, setIngredientsStyle] = useState({});
  const [gorditaStyle, setGorditaStyle] = useState({});

  const onScrollProcess = (scrollProcess, isScrollDown) => {
    setIngredientsStyle({ transform: `translateY(${scrollProcess *  0.2}vh)` });
    setGorditaStyle({ transform: `translateY(${-scrollProcess * 0.2}vh)` });
  };

  return (
    <section className="container ingredients-container">
      <ScrollPanel onScrollProcess={onScrollProcess}>
        <div className="text-container">
          <div className="scritp-text orange shadow-white">
            Ingredientes de calidad
          </div>
          <p>
            Cada guiso tiene un rico y muy original sabor, son deliciosas y
            calientitas, ven y disfrutalas, de Lunes a Domingo.
          </p>
          <p>
            !Siguenos en nuestras redes sociales y ven a gordear con nosotros!
          </p>
        </div>
        <img className="gordita" src={GorditaAbiertaImg} style={gorditaStyle} />
        <img
          className="ingredients"
          src={IngredientesImg}
          style={ingredientsStyle}
        />
      </ScrollPanel>
    </section>
  );
};
export default Ingredientes;
