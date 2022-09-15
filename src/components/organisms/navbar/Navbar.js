import React from "react";
import "./Navbar.scss";

import Logo from "@/assets/img/alien.svg";
import Menu from "@/assets/img/menu.svg";

const Navbar = () => {
  return (
    <div className="navbar-page">
      <div className="vertical-center">
        <div className="grid">
          <div className="link-container">
            <div>
              <a href="#nosotros">NOSOTROS</a>
              <a href="#productos">PRODUCTOS</a>
            </div>
            <div></div>
          </div>
          <div className="logo-container">
            <Logo />
          </div>
          <div className="link-container">
            <div>
              <a href="#carta">CARTA</a>
              <a href="#horario">HORARIO</a>
            </div>
            <div></div>
          </div>
          <div className="menu-container vertical-center">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
