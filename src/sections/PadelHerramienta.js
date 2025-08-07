// src/sections/PadelHerramienta.js
import React from "react";
import "../styles/PadelHerramienta.css";
import padelToolImg from "../assets/PadelTeam.jpg";

const PadelHerramienta = () => {
  return (
    <section className="padel-herramienta">
      <div className="padel-herramienta-container">
        <div className="imagen" data-aos="fade-right">
          <img src={padelToolImg} alt="Pádel corporativo" />
        </div>
        <div className="contenido" data-aos="fade-left">
          <h2>El Pádel como Herramienta Empresarial</h2>
          <p>
            El pádel es mucho más que un deporte: es una poderosa herramienta para fortalecer relaciones, desarrollar habilidades sociales y fomentar la colaboración estratégica.
          </p>
          <p>
            Cada punto jugado, cada movimiento en equipo, refleja cómo las personas interactúan en situaciones reales de trabajo. Por eso, nuestras experiencias están diseñadas para generar aprendizajes reales en un entorno divertido y dinámico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PadelHerramienta;
