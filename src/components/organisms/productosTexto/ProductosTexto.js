import React from "react";
import "./ProductosTexto.scss";
import PalabraProductos from "img/palabras/productos.svg";

const ProductosTexto = () => {
  return (
    <section className="container product-text" id="productos">
      <div>
        <PalabraProductos className="product-title" />
        <div className="grid">
          <div>
            <p>
              En <span className="gordelicias-font">Gordelicias</span>{" "}
              estamos comprometidos con la calidad de nuestros productos y
              proveedores eligiendo los mejores ingredientes para ofrecer un
              sabor único y delicioso por un precio amigable y accesible.
            </p>
          </div>
          <div>
            <p>
              Hemos implementado acciones para que nuestros estándares de
              calidad estén en constante mejora, innovando en el ramo de
              restaurantes de comida rápida mexicana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductosTexto;
