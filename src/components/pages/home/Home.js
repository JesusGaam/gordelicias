import React from "react";
import Navbar from "@/components/organisms/navbar/Navbar";
import Header from "@/components/organisms/header/Header";
import ListosGordear from "@/components/organisms/listosGordear/ListosGordear";
import Nosotros from "@/components/organisms/nosotros/Nosotros";
import Productos from "@/components/organisms/productos/Productos";
import Menu from "@/components/organisms/menu/Menu";
import Ingredientes from "@/components/organisms/ingredientes/Ingredientes";
import OrdenaAqui from "@/components/organisms/ordenaAqui/OrdenaAqui";
import Encuentranos from "@/components/organisms/encuentranos/Encuentranos";
import Horarios from "@/components/organisms/horarios/Horarios";
import Footer from "@/components/organisms/footer/Footer";
import PlaticaNosotros from "@/components/organisms/platicaNosotros/PlaticaNosotros";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ListosGordear />
      <Nosotros />
      <Productos />
      <Menu />
      <Ingredientes />
      <OrdenaAqui />
      <Encuentranos />
      <Horarios />
      <PlaticaNosotros />
      <Footer />
    </>
  );
};

export default Home;
