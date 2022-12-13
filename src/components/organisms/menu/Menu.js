import React from "react";
import "./Menu.scss";
import MenuImg from "img/menu.jpg";
import PideLineaImg from "img/pide-linea.svg";
import NelaCompuImg from "img/nela-compu.svg";
import PalabraBoulevard from "img/palabra-boulevard.svg"
import PalabraMercadoTlaque from "img/palabra-mercado-tlaque.svg"
import pdfMenuBoulevard from "../../../assets/gordelicias-menu-boulevard.pdf";
import pdfMenuMercado from "../../../assets/gordelicias-menu-mercado.pdf";



import MenuTitle from "img/menu-title.svg";

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
