import React from "react";
import "./Menu.scss";
import MenuImg from "img/menu.jpg";
import Star from "img/star.svg";
import PideLineaImg from "img/pide-linea.svg";
import NelaCompuImg from "img/nela-compu.svg";

const Menu = () => {
  return (
    <section className="container menu" id="carta">
      <div>
        <div className="grid-title">
          <div>
            <Star className="star" fill="rgb(82, 210, 202)"/>
          </div>
          <div>
            <div className="scritp-text shadow-mint">Menu</div>
          </div>
          <div>
            <Star className="star" fill="rgb(82, 210, 202)"/>
          </div>
        </div>
        <img src={MenuImg} />
        <div className="grid">
          <div>
            <NelaCompuImg />
          </div>
          <div>
            <PideLineaImg />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Menu;
