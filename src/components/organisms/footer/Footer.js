import React from "react";
import "./Footer.scss";
import LogoImg from "img/logo-horizontal.svg";
import Instagram from "img/instagram.svg";
import Facebook from "img/facebook.svg";
import Youtube from "img/youtube.svg";

const Footer = () => {
  return (
    <section className="container footer">
      <div>
        <LogoImg className="logo" />
        <div className="grid">
          <div>
            <div className="subtitle">Contacto</div>
            <div>
              <a href="mailto:mktgordelicias@gmail.com">
                mktgordelicias@gmail.com
              </a>
            </div>
            <div>
              <a href="tel:3341708160">Tel: 33 4170 8160</a>
            </div>
          </div>
          <div className="social-network">
            <a href="https://www.instagram.com/gordeliciasgdloficial/">
              <Instagram className="instagram" />
            </a>
            <a href="https://www.facebook.com/Gordeliciasgdloficial">
              <Facebook className="facebook" />
            </a>
            <a href="https://www.youtube.com/channel/UCTIc_b-fBYB0P5Zgcuy09rw/featured">
              <Youtube className="youtube" />
            </a>
          </div>
          <div>
            <div>
              <a href="#aviso-de-privacidad">Aviso de privacidad</a>
            </div>
            <div>
              <a href="#terminos-y-condiciones">Términos y condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
