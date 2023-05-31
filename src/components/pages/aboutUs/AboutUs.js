import React from "react";
import Navbar from "@/components/organisms/navbar/Navbar";
import Nosotros from "@/components/organisms/nosotros/Nosotros";
import NuestraHistoria from "@/components/organisms/nuestraHistoria/NuestraHistoria";
import Footer from "@/components/organisms/footer/Footer";

import "./AboutUs.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Nosotros />
      <NuestraHistoria />
      <Footer />
    </>
  );
};

export default Home;
