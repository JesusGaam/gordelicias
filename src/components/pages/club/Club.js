import React from "react";
import Navbar from "@/components/organisms/navbar/Navbar";
import Footer from "@/components/organisms/footer/Footer";
import clubGordeliciasImg from "img/club-gordelicias.png";

import "./Club.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="container club-gordelicias" >
        <div>
          <img src={clubGordeliciasImg} alt="beneficios club gordelicias" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
