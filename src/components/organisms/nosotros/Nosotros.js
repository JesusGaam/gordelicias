import React from "react";
import "./Nosotros.scss";
import nelaFotos from "img/nela-fotos-gorditas.png";

const Nosotros = () => {
  return (
    <section className="container about-us" id="nosotros">
      <div>
        <div className="grid">
          <div>
            <div>
              <div className="scritp-text shadow-orange">Nosotros</div>
              <p>
                Somos quien te ha quitado el antojo y saciado tu hambre desde
                1977, somos la tradición, la sazón y el sabor a México, somos
                quien te ha acompañado durante todos estos años en esas charlas
                de cafés con amigos en días de lluvia y esos champurrados
                calientitos en mañanas frías, somos las autenticas gorditas de
                Tlaquepaque.
              </p>
            </div>
          </div>
          <div>
            <img src={nelaFotos} className="nela-pics" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
