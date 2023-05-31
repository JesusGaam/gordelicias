import React from "react";
import Navbar from "@/components/organisms/navbar/Navbar";
import Menu from "@/components/organisms/menu/Menu";
import Ingredientes from "@/components/organisms/ingredientes/Ingredientes";
import OrdenaAqui from "@/components/organisms/ordenaAqui/OrdenaAqui";
import Footer from "@/components/organisms/footer/Footer";

import "./Menu.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <Ingredientes />
      <OrdenaAqui />
      <Footer />
    </>
  );
};

export default Home;
