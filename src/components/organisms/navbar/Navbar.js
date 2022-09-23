import React from "react";
import "./Navbar.scss";

import Logo from "img/logo-simple.svg";
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
            <div className="banderitas-container">
              <div></div>
            </div>
          </div>
          <div className="logo-container">
            <Logo />
          </div>
          <div className="link-container">
            <div>
              <a href="#carta">CARTA</a>
              <a href="#horario">HORARIO</a>
            </div>
            <div className="banderitas-container right">
              <div></div>
            </div>
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
