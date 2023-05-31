import React from "react";
import Navbar from "@/components/organisms/navbar/Navbar";
import ProductosTexto from "@/components/organisms/productosTexto/ProductosTexto";
import ProductosCarrusel from "@/components/organisms/productosCarrusel/ProductosCarrusel";
import Ingredientes from "@/components/organisms/ingredientes/Ingredientes";
import Footer from "@/components/organisms/footer/Footer";

import "./Products.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <ProductosTexto />
      <ProductosCarrusel />
      <Ingredientes />
      <Footer />
    </>
  );
};

export default Home;
