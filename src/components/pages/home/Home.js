import React from "react";
import Navbar from "@/components/organisms/navbar/Navbar";
import Promos from "@/components/organisms/promos/Promos";
import ListosGordear from "@/components/organisms/listosGordear/ListosGordear";
import Nosotros from "@/components/organisms/nosotros/Nosotros";
import NuestraHistoria from "@/components/organisms/nuestraHistoria/NuestraHistoria";
import Productos from "@/components/organisms/productos/Productos";
import Menu from "@/components/organisms/menu/Menu";
import ProductosCarrusel from "@/components/organisms/productosCarrusel/ProductosCarrusel";
import Ingredientes from "@/components/organisms/ingredientes/Ingredientes";
import OrdenaAqui from "@/components/organisms/ordenaAqui/OrdenaAqui";
import Encuentranos from "@/components/organisms/encuentranos/Encuentranos";
import Horarios from "@/components/organisms/horarios/Horarios";
import Footer from "@/components/organisms/footer/Footer";
import Contacta from "@/components/organisms/contactaNosotros/ContactaNosotros";
import OrdenaAquiModal from "@/components/organisms/ordenaAquiModal/OrdenaAquiModal";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Promos />
      <ListosGordear />
      <Nosotros />
      <NuestraHistoria />
      <ProductosCarrusel />
      <Productos />
      <Menu />
      <Ingredientes />
      <OrdenaAqui />
      <Encuentranos />
      <Horarios />
      <Contacta />
      <Footer />
      <OrdenaAquiModal />
    </>
  );
};

export default Home;
