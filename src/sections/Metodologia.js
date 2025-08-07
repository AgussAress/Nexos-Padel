// src/sections/Metodologia.js
import React from "react";
import "../styles/Metodologia.css";
import { FaRegComments, FaLightbulb, FaCogs, FaCheckCircle } from "react-icons/fa";

const pasos = [
  {
    icon: <FaRegComments />,
    titulo: "Escuchamos tu propuesta",
    descripcion: "Conocemos a tu empresa, entendemos tus objetivos y analizamos qué tipo de experiencia necesitás."
  },
  {
    icon: <FaLightbulb />,
    titulo: "Diseñamos tu evento",
    descripcion: "Creamos una propuesta 100% personalizada, pensada para lograr impacto real en tu equipo."
  },
  {
    icon: <FaCogs />,
    titulo: "Coordinamos cada detalle",
    descripcion: "Desde canchas, coaches, branding, hasta catering o premios. Todo a medida y sin preocupaciones."
  },
  {
    icon: <FaCheckCircle />,
    titulo: "¡Lo hacemos realidad!",
    descripcion: "Ejecutamos la experiencia con profesionalismo y energía, garantizando un evento inolvidable."
  },
];

const Metodologia = () => {
  return (
    <section id="metodologia" className="metodologia">
      <div className="metodologia-container" data-aos="fade-up">
        <h2>Nuestra Metodología</h2>
        <div className="pasos">
          {pasos.map((paso, index) => (
            <div className="paso" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="icono">{paso.icon}</div>
              <div className="texto">
                <h4>{paso.titulo}</h4>
                <p>{paso.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
