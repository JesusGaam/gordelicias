import React, { useState } from "react";
import "./Ingredientes.scss";
import ScrollPanel from "../ScrollPanel/ScrollPanel";
import IngredientesImg from "img/ingredientes.png";
import GorditaAbiertaImg from "img/gordita-abierta.png";

import Carne1 from "img/carne-blur1.png";
import Carne2 from "img/carne-blur2.png";
import Carne3 from "img/carne-blur3.png";
import Cebolla from "img/cebolla.png";
import Chanpinon1 from "img/champinon-1.png";
import Chanpinon2 from "img/champinon-2.png";
import ChileRojo from "img/chile-rojo.png";
import ChileVerde from "img/chile-verde.png";
import Jitomate1 from "img/jitomate-1.png";
import Jitomate2 from "img/jitomate-2.png";
import Papa1 from "img/papa.png";
import Papa2 from "img/papa-blur.png";

const Ingredientes = () => {
  const [rotateLeft, setRotateLeft] = useState({});
  const [rotateRight, setRotateRight] = useState({});
  const [backIngredientsStyle, setBackIngredientsStyle] = useState({});
  const [frontIngredientsStyle, setFrontIngredientsStyle] = useState({});
  const [gorditaStyle, setGorditaStyle] = useState({});

  const onScrollProcess = (scrollProcess, _isScrollDown) => {
    setRotateLeft({ transform: `rotate(${scrollProcess * 0.13}deg)` });
    setRotateRight({ transform: `rotate(-${scrollProcess * 0.24}deg)` });
    setBackIngredientsStyle({
      transform: `translateY(${scrollProcess * 0.14}vh)`,
    });
    setFrontIngredientsStyle({
      transform: `translateY(${scrollProcess * 0.25}vh)`,
    });
    setGorditaStyle({ transform: `translateY(${-scrollProcess * 0.07}vh)` });
  };

  return (
    <section className="container ingredients-container">
      <ScrollPanel onScrollProcess={onScrollProcess}>
        <div className="text-container">
          <div className="scritp-text orange shadow-white">
            Ingredientes de calidad
          </div>
          <p>
            Siempre buscamos que nuestros guisos a parte de ricos sean
            nutritivos, por eso seleccionamos cuidadosamente casa uno de
            nuestros ingredientes para darte una mejor calidad de alimentos y
            con esto un mejor servicio.
          </p>
        </div>
        <img className="gordita" src={GorditaAbiertaImg} style={gorditaStyle} />
        <div className="back-intredients" style={backIngredientsStyle}>
          <div>
            <img src={Carne1} className="carne1" style={rotateLeft} />
            <img src={Carne2} className="carne2" style={rotateRight} />
            <img src={Carne3} className="carne3" style={rotateLeft} />
            <img src={Papa2} className="papa2" style={rotateRight} />
          </div>
        </div>
        <div className="front-intredients" style={frontIngredientsStyle}>
          <div>
            <img src={Cebolla} className="cebolla" style={rotateRight} />
            <img src={Chanpinon1} className="chanpinon1" style={rotateLeft} />
            <img src={Chanpinon2} className="chanpinon2" style={rotateRight} />
            <img src={ChileRojo} className="chileRojo" style={rotateLeft} />
            <img src={ChileVerde} className="chileVerde" style={rotateRight} />
            <img src={Jitomate1} className="jitomate1" style={rotateLeft} />
            <img src={Jitomate2} className="jitomate2" style={rotateRight} />
            <img src={Papa1} className="papa1" style={rotateLeft} />
          </div>
        </div>
      </ScrollPanel>
    </section>
  );
};
export default Ingredientes;
