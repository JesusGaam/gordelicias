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
