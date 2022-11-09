import React from "react";
import "./Productos.scss";
import Star from "img/star.svg";
import CirculoVerde from "img/circulo-verde.png?001";
import CirculoRosa from "img/circulo-rosa.png?001";
import CirculoNaranja from "img/circulo-naranja.png?001";

const Productos = () => {
  return (
    <>
      <section className="container products" id="productos">
        <div>
          <div className="grid-title">
            <div>
              <Star className="star" />
            </div>
            <div>
              <div className="scritp-text orange shadow-white">Productos</div>
            </div>
            <div>
              <Star className="star" />
            </div>
          </div>
        </div>
      </section>
      <section className="container product">
        <div>
          <div>
            <div className="scritp-text shadow-orange">Comida</div>
            <p>
              Servimos las gorditas más ricas con los mejores guisos, siempre
              con ingredientes de la mejor calidad, para saciar el antojo de
              hasta el más indeciso.
            </p>
          </div>
          <div className="images ">
            <img
              src={CirculoVerde}
              className="circle fade-in-right-effect delay-200"
            />
          </div>
        </div>
      </section>

      <section className="container product right">
        <div>
          <div>
            <div className="scritp-text shadow-orange">Bebidas</div>
            <p>
              Para bajar el bocado siempre es bueno un café, agua fresca o
              champurrado y si quieres matar la sed, un refresco o cerveza puede
              ser.
            </p>
          </div>
          <div className="images">
            <img
              src={CirculoRosa}
              className="circle fade-in-left-effect delay-200"
            />
          </div>
        </div>
      </section>

      <section className="container product">
        <div>
          <div>
            <div className="scritp-text shadow-orange">Postres</div>
            <p>
              Que dulce es comer rico así que, para finalizar una galleta, pay
              de elote o flan puedes ordenar.
            </p>
          </div>
          <div className="images">
            <img
              src={CirculoNaranja}
              className="circle fade-in-right-effect delay-200"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Productos;
