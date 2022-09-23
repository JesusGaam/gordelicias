import React from "react";
import "./Productos.scss";
import ProductosText from "img/productos-text.svg";
import ComidaText from "img/comida-text.svg";
import BebidaText from "img/bebidas-text.svg";
import PostresText from "img/postres-text.svg";

import CirculoAzul from "img/circulo-azul.png";
import CirculoRosa from "img/circulo-rosa.png";
import CirculoArillo from "img/circulo-amarillo.png";

import ManoGordita from "img/mano-gordita.png";
import ManoVaso from "img/mano-vaso.png";

const Productos = () => {
  return (
    <>
      <section className="container products">
        <div>
          <ProductosText className="products-title" />
        </div>
      </section>
      <section className="container product">
        <div>
          <div>
            <ComidaText className="product-subtitle" />
            <p>
              Contamos con guisos muy ricos para nuestras gorditas, puedes
              combinarlos o comerlos solos.
            </p>
          </div>
          <div className="images">
            <img src={CirculoAzul} className="circle" />
            <img src={ManoGordita} className="hand" />
          </div>
        </div>
      </section>

      <section className="container product right">
        <div>
          <div>
            <BebidaText className="product-subtitle" />
            <p>
              Tenemos gran variedad de bebidas, son frescas y cálidas, hechas al
              día, tenemos la bebida perfecta para acompañar tus gorditas.
            </p>
          </div>
          <div className="images">
            <img src={CirculoRosa} className="circle" />
            <img src={ManoVaso} className="hand" />
          </div>
        </div>
      </section>

      <section className="container product">
        <div>
          <div>
            <PostresText className="product-subtitle" />
            <p>
              Exquisitos para darle un sabor que hace que tu día sea
              auténticamente delicioso y dulce.
            </p>
          </div>
          <div className="images">
            <img src={CirculoArillo} className="circle" />
            <img src={ManoGordita} className="hand" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Productos;
