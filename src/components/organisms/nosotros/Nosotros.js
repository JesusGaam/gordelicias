import React from "react";
import "./Nosotros.scss";
import NosotrosText from "img/nosotros-text.svg";
import nelaFotos from "img/nela-fotos.png";

const Nosotros = () => {
  return (
    <section className="container about-us">
      <div>
        <div className="grid">
          <div>
            <div>
              <NosotrosText className="about-us-title" />
              <p>
                Gorditas rellenas de tradición, hechas a mano desde 1977. En
                Gordelicias queremos proporcionar gorditas nutricionalmente
                sanas, accesibles, con una preparación rápida y artesanal, que
                reviva, continúe la tradición y la cultura mexicana, a través de
                su muy delicioso razón.
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
