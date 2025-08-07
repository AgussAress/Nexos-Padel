// src/App.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nosotros from "./sections/Nosotros";
import Contacto from "./sections/Contacto";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import WhatsappButton from "./components/WhatsappButton";
import Servicios from "./sections/Servicios";
import Mision from "./sections/Mision";
import Beneficios from "./sections/Beneficios";
import PadelHerramienta from "./sections/PadelHerramienta";
import Metodologia from "./sections/Metodologia";
import Experiencias from "./sections/Experiencias";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Servicios/>
      <Nosotros/>
      <Mision/>
      <Beneficios/>
      <PadelHerramienta/>
      <Metodologia/>
      <Experiencias/>

      <Contacto/>
      <WhatsappButton />
      <Footer/>
    </div>
  );
}

export default App;
