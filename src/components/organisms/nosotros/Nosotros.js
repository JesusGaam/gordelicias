import React from "react";
import "./Nosotros.scss";
import NosotrosImg from "img/palabras/nosotros.svg";
import nelaFotos from "img/nela-fotos-gorditas.png";

const Nosotros = () => {
  return (
    <section className="container about-us" id="nosotros">
      <div>
        <div className="grid">
          <div>
            <div>
              <div>
                <NosotrosImg className="title" />
              </div>
              <p>
                <font className="gordelicias-font">Gordelicias</font> nació en
                1977 siendo las primeras y auténticas gorditas estilo norteño en
                Tlaquepaque, a partir de ahí nos hemos dedicado a elaborar las
                más deliciosas gorditas rellenas con guisos únicos,
                tradicionales y de la mejor calidad, para satisfacer ese
                interminable antojo mexicano por el que lo damos todo:
              </p>
              <p>
                ¡Siempre calientitas, con rapidez y tan ricas para chuparte los
                dedos!
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
