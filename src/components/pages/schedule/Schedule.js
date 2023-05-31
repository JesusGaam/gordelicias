import React from "react";
import Navbar from "@/components/organisms/navbar/Navbar";
import Encuentranos from "@/components/organisms/encuentranos/Encuentranos";
import Horarios from "@/components/organisms/horarios/Horarios";
import Footer from "@/components/organisms/footer/Footer";
import Contacta from "@/components/organisms/contactaNosotros/ContactaNosotros";

import "./Schedule.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Horarios />
      <Encuentranos />
      <Contacta />
      <Footer />
    </>
  );
};

export default Home;
