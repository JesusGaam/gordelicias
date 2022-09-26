import React from "react";
import "./Ingredientes.scss";
import IngredientesImg from "img/ingredientes.png";
import GorditaAbiertaImg from "img/gordita-abierta.png";

const Ingredientes = () => {
  return (
    <div className="ingredients-container">
      <div className="text-container">
        <div className="scritp-text orange shadow-white">Ingredientes de calidad</div>
        <p>
          Cada guiso tiene un rico y muy original sabor, son deliciosas y
          calientitas, ven y disfrutalas, de Lunes a Domingo.
        </p>
        <p>
          !Siguenos en nuestras redes sociales y ven a gordear con nosotros!
        </p>
      </div>
      <img className="gordita" src={GorditaAbiertaImg} />
      <img className="ingredients" src={IngredientesImg} />
    </div>
  );
};
export default Ingredientes;
