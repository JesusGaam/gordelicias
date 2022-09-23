import React from "react";
import Navbar from "@/components/organisms/navbar/Navbar";
import Header from "@/components/organisms/header/Header";
import ListosGordear from "@/components/organisms/listosGordear/ListosGordear";
import Nosotros from "@/components/organisms/nosotros/Nosotros";
import Productos from "@/components/organisms/productos/Productos";
import Menu from "@/components/organisms/menu/Menu";

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
    </>
  );
};

export default Home;
