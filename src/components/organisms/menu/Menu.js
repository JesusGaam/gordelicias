import React from "react";
import "./Menu.scss";
import MenuImg from "img/menu.jpg";
import PideLineaImg from "img/pide-linea.svg"
import NelaCompuImg from "img/nela-compu.svg"

const Menu = () => {
  return (
    <section className="container menu">
      <div>
        <img src={MenuImg} />
        <div className="grid">
          <div><NelaCompuImg/></div>
          <div><PideLineaImg/></div>
        </div>
      </div>
    </section>
  );
};
export default Menu;
