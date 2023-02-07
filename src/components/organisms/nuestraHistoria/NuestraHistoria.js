import React from "react";
import "./NuestraHistoria.scss";
import NuestraHistoriaImg from "img/palabras/nuestra-historia.svg";

const NuestraHistoria = () => {
  return (
    <section className="container our-history">
      <div>
        <NuestraHistoriaImg className="title" />
        <div className="grid">
          <div>
            <p>
              Nuestra historia comienza con Nela, migrando desde un pueblito en
              el estado de Chihuahua a la ciudad de San Pedro Tlaquepaque,
              Jalisco.
            </p>
          </div>
          <div>
            <p>
              A lo lejos se vio surgir un puestito en el mercado del Parían, una
              amigable figura con un mandil y unas trenzas muy bien hechas
              meneaba los guisos en cazuelas de barro, calentándose a fuego
              lento con un sencillo y cálido aire de comida hogareña, al ritmo
              de esto se miraba a Nela darle forma a la masa recién hecha y
              sobre el comal se pintaba de lunares la figura de masa que se iba
              cociendo al calor del fuego. Más de un curioso glotón noto esa
              peculiar presencia y se acercó para averiguar qué es lo que
              cocinaba, en ellos surgía una expresión de antojo y sorpresa al
              ver este sencillo, rico y rechoncho alimento.
            </p>
            <p>
              Quien iba a pensar que años después esa aventura que emprendía un
              ama de casa mexicana sería una deliciosa herencia, no solo para su
              familia si no para cualquier comensal hambriento que pruebe las
              famosas y originales gorditas de Tlaquepaque a las que hoy en día
              llamamos con cariño{" "}
              <span className="gordelicias-font">Gordelicias</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestraHistoria;
