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
            <a href="#nosotros">NOSOTROS</a>
          </div>
          <div>
            <a href="#productos">PRODUCTOS</a>
          </div>
          <div>
            <a href="#carta">CARTA</a>
          </div>
          <div>
            <a href="#horario">HORARIO</a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
