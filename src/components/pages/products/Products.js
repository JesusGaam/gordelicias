import React from "react";
import Navbar from "@/components/organisms/navbar/Navbar";
import ProductosTexto from "@/components/organisms/productosTexto/ProductosTexto";
import ProductosCarrusel from "@/components/organisms/productosCarrusel/ProductosCarrusel";
import Menu from "@/components/organisms/menu/Menu";
import Ingredientes from "@/components/organisms/ingredientes/Ingredientes";
import OrdenaAqui from "@/components/organisms/ordenaAqui/OrdenaAqui";
import Footer from "@/components/organisms/footer/Footer";

import "./Products.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <ProductosTexto />
      <ProductosCarrusel />
      <Menu />
      <Ingredientes />
      <OrdenaAqui />
      <Footer />
    </>
  );
};

export default Home;
