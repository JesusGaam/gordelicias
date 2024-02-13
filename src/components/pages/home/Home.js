import React from "react";
import Navbar from "organisms/navbar/Navbar";
import Promos from "organisms/promos/Promos";
import ListosGordear from "organisms/listosGordear/ListosGordear";
import Ingredientes from "organisms/ingredientes/Ingredientes";
import OrdenaAqui from "organisms/ordenaAqui/OrdenaAqui";
import Horarios from "organisms/horarios/Horarios";
import Contacta from "organisms/contactaNosotros/ContactaNosotros";
import InstagramGrid from "organisms/instagramGrid/InstagramGrid";
import Footer from "organisms/footer/Footer";
import OrdenaAquiModal from "organisms/ordenaAquiModal/OrdenaAquiModal";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Promos />
      <ListosGordear />
      <Ingredientes />
      <OrdenaAqui />
      <InstagramGrid />
      <Horarios />
      <Contacta />
      <Footer />
      <OrdenaAquiModal />
    </>
  );
};

export default Home;
