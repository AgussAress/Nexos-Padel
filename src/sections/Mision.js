// src/sections/Mision.js
import React from "react";
import "../styles/Mision.css";

const Mision = () => {
  return (
    <section id="mision" className="mision">
      <div className="mision-container" data-aos="fade-up">
        <h2>Nuestra Misión</h2>
        <p className="mision-text">
          En <strong>Nexos Padel</strong> nos esforzamos por trascender las simples actividades corporativas
          y transformarlas en experiencias con propósito.  
        </p>
        <p className="mision-text">
          Creemos que el pádel, con su fuerte componente social y colaborativo, es la herramienta ideal para fortalecer vínculos, mejorar la cultura de trabajo y generar un verdadero impacto en los equipos humanos.
        </p>
        <p className="mision-text">
          Nuestra misión es ayudarte a crear un evento que deje huella en tu empresa.
        </p>
      </div>
    </section>
  );
};

export default Mision;
