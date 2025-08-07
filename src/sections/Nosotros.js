// src/sections/Nosotros.js
import React from "react";
import "../styles/Nosotros.css";
import equipoImg from "../assets/raquetazo.jpg";

const Nosotros = () => {
  return (
    <section id="sobre-nosotros" className="nosotros">
      <div className="nosotros-container" data-aos="fade-up">
        <h2>¿Quiénes Somos?</h2>
        <div className="nosotros-content">
          <div className="nosotros-img">
            <img src={equipoImg} alt="Equipo Nexos" />
          </div>
          <div className="nosotros-text">
            <p>
              En <strong>Nexos Padel</strong> no solo organizamos eventos de pádel corporativos,
              también creamos experiencias donde el deporte es el protagonista.
              Nos enfocamos en generar encuentros que conecten, diviertan y fortalezcan la cultura de las empresas.
            </p>
            <p>
              Ofrecemos servicios integrales para la organización de eventos a medida, adaptándonos al perfil
              y los objetivos de cada cliente. Nos encargamos de todo el proceso: desde la idea hasta la ejecución,
              con atención a cada detalle.
            </p>

            <div className="equipo" data-aos="fade-up" data-aos-delay="200">
              <h3>Nuestro Equipo</h3>
              <p>
                Contamos con profesionales del mundo del pádel y la producción de eventos. Nuestro equipo tiene amplia
                experiencia y está preparado para llevar cada proyecto con compromiso, energía y pasión. 
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
