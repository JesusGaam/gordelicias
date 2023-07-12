import React from "react";
import Navbar from "@/components/organisms/navbar/Navbar";
import Promos from "@/components/organisms/promos/Promos";
import ListosGordear from "@/components/organisms/listosGordear/ListosGordear";
import Ingredientes from "@/components/organisms/ingredientes/Ingredientes";
import OrdenaAqui from "@/components/organisms/ordenaAqui/OrdenaAqui";
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
      <Ingredientes />
      <OrdenaAqui />
      <Horarios />
      <Contacta />
      <Footer />
      <OrdenaAquiModal />
    </>
  );
};

export default Home;
