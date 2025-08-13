// src/sections/Servicios.js
import React from "react";
import "../styles/Servicios.css";
import torneoImg from "../assets/padelImg.jpg";
import clinicaImg from "../assets/pegaPelota.jpg";
import networkingImg from "../assets/GrupoPad.jpeg";
import eventoImg from "../assets/fea.jpeg";

const Servicios = () => {
  return (
    <section id="servicios" className="servicios">
      <div className="servicios-container" data-aos="fade-up">
        <h2>Servicios Corporativos de Pádel</h2>
        <p className="intro">
          Impulsá la cultura de tu empresa con experiencias dinámicas y memorables. Ofrecemos soluciones a medida para todo tipo de objetivos corporativos.
        </p>
        <div className="servicios-grid">
          <div className="servicio-card" data-aos="fade-up" data-aos-delay="100">
            <img src={torneoImg} alt="Torneo" className="servicio-img" />
            <h4>Torneos Interempresariales</h4>
            <p>Fomentá la competencia sana y el compañerismo entre empleados o empresas aliadas.</p>
          </div>
          <div className="servicio-card" data-aos="fade-up" data-aos-delay="200">
            <img src={clinicaImg} alt="Clínica" className="servicio-img" />
            <h4>Clínicas Personalizadas</h4>
            <p>Mejorá las habilidades de tu equipo con entrenadores profesionales. Ideal para team building.</p>
          </div>
          <div className="servicio-card" data-aos="fade-up" data-aos-delay="300">
            <img src={networkingImg} alt="Networking" className="servicio-img" />
            <h4>Networking + Pádel</h4>
            <p>Combiná el deporte con oportunidades de interacción entre compañeros o clientes.</p>
          </div>
          <div className="servicio-card" data-aos="fade-up" data-aos-delay="400">
            <img src={eventoImg} alt="Evento" className="servicio-img" />
            <h4>Eventos Temáticos</h4>
            <p>Diseñamos jornadas únicas: lanzamientos, celebraciones o experiencias especiales, 100% personalizadas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
