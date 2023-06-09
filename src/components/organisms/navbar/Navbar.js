import React, { useState } from "react";
import "./Navbar.scss";

import Logo from "img/logo-simple.svg";
import Menu from "@/assets/img/menu.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("close");

  const clickHamburgerMenu = () => {
    setOpenMenu(openMenu === "open" ? "close" : "open");
    document.body.style.overflow = openMenu === "open" ? "" : "hidden";
  };
  return (
    <>
      <div className="navbar-page">
        <div className="vertical-center">
          <div className="grid">
            <div className="link-container">
              <div>
                <a href="/nosotros.html">NOSOTROS</a>
                <a href="/productos.html">PRODUCTOS</a>
              </div>
              <div className="banderitas-container">
                <div></div>
              </div>
            </div>
            <div className="logo-container">
              <a href="/" aria-label="Inicio">
                <Logo />
              </a>
            </div>
            <div className="link-container">
              <div>
                <a href="/nuestra-carta.html">CARTA</a>
                <a href="/sucursales.html">SUCURSALES</a>
              </div>
              <div className="banderitas-container right">
                <div></div>
              </div>
            </div>
            <div
              className="menu-container vertical-center"
              onClick={clickHamburgerMenu}
            >
              <Menu />
            </div>
          </div>
        </div>
      </div>
      <nav className={`container mobile-menu ${openMenu}`}>
        <div className="background"></div>
        <div className="row">
          <div>
            <a href="/nosotros.html" onClick={clickHamburgerMenu}>
              NOSOTROS
            </a>
          </div>
          <div>
            <a href="/productos.html" onClick={clickHamburgerMenu}>
              PRODUCTOS
            </a>
          </div>
          <div>
            <a href="/nuestra-carta.html" onClick={clickHamburgerMenu}>
              CARTA
            </a>
          </div>
          <div>
            <a href="/sucursales.html" onClick={clickHamburgerMenu}>
              SUCURSALES
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
