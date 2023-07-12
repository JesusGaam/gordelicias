import React from "react";
import Navbar from "@/components/organisms/navbar/Navbar";
import Horarios from "@/components/organisms/horarios/Horarios";
import Footer from "@/components/organisms/footer/Footer";
import Contacta from "@/components/organisms/contactaNosotros/ContactaNosotros";

import "./Schedule.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Horarios />
      <Contacta />
      <Footer />
    </>
  );
};

export default Home;
