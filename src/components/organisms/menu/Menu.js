import React from "react";
import "./Menu.scss";
import MenuTitle from "img/palabras/menu.svg";
import MenuImg from "img/menu.jpg";
import PideLineaImg from "img/pide-linea.svg";
import NelaCompuImg from "img/nela-compu.svg";
import PalabraBoulevard from "img/palabras/boulevard.svg"
import PalabraMercadoTlaque from "img/palabras/mercado-tlaque.svg"
import pdfMenuBoulevard from "../../../assets/menu_boulevard.pdf";
import pdfMenuMercado from "../../../assets/menu_mercado.pdf";

const Menu = () => {
  return (
    <section className="container menu" id="carta">
      <div>
        <MenuTitle className="menu-title" />
        <img src={MenuImg} />
        <div className="grid">
          <div>
            <NelaCompuImg />
          </div>
          <div>
            <div>
              <PideLineaImg />
            </div>
          </div>
        </div>
        <div className="link-container">
          <div>
            <div className="sucursal"><PalabraBoulevard/></div>
            <a href={pdfMenuBoulevard} target="_blank">
              Descarga el menú
            </a>
          </div>
          <div>
            <div className="sucursal"><PalabraMercadoTlaque/></div>
            <a href={pdfMenuMercado} target="_blank">
              Descarga el menú
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Menu;
