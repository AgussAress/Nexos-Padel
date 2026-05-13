// src/sections/Partners.js
import React from "react";
import "../styles/Partners.css";
import { FaHandshake } from "react-icons/fa";

// Importación de imágenes
import fernandaTolozaImg from "../assets/ferToloza.png"; 
import brendaGendinImg from "../assets/bgendin.jpg"; // Asegúrate de que el nombre coincida

const Partners = () => {
  return (
    <section id="partners" className="partners">
      <div className="partners-container" data-aos="fade-up">
        <div className="partners-header">
          <div className="partners-icon"><FaHandshake /></div>
          <h2>Nuestros Partners</h2>
          <h4>Aliados que amplifican cada experiencia</h4>
          <p>
            En cada evento que organizamos, trabajamos junto a los mejores partners estratégicos que comparten nuestra visión:
            generar impacto real, fomentar el bienestar y crear momentos memorables.
            Desde clubes deportivos y espacios gastronómicos hasta mentores, productoras audiovisuales y proveedores logísticos,
            cada aliado aporta excelencia, compromiso y autenticidad.
          </p>
          <p>
            Gracias a estas alianzas, podemos ofrecer experiencias integrales que combinan deporte, cultura, aprendizaje y conexión genuina.
            Juntos, transformamos cada viaje en una oportunidad para crecer, compartir y disfrutar.
          </p>
        </div>

        <div className="partners-cards">

          {/* FERNANDA TOLOZA */}
          <div className="partner-card" data-aos="fade-up">
            <div className="partner-img-container">
              <img src={fernandaTolozaImg} alt="Fernanda Toloza" className="partner-img" />
            </div>
            <h3>Fernanda Toloza</h3>
            <h4>Founder</h4>
            <p>
              Líder con más de 25 años de experiencia en la industria del turismo, formada en sector turístico, con una visión integral de la industria gracias a su recorrido por diversos ámbitos.
            </p>
            <p>
              Especialista en coordinación de equipos, gestión de proyectos y calidad de servicio, destaca por su capacidad organizativa, sus sólidas habilidades interpersonales y su compromiso con la excelencia.
            </p>
          </div>

          {/* BRENDA GENDIN */}
          <div className="partner-card" data-aos="fade-up" data-aos-delay="200">
            <div className="partner-img-container">
              <img src={brendaGendinImg} alt="Brenda Gendin" className="partner-img" />
            </div>
            <h3>Brenda Gendin</h3>
            <h4>Co-Founder</h4>
            <p>
              Licenciada en Relaciones del Trabajo y Magíster en Coaching y Cambio Organizacional, con más de 20 años acompañando líderes y equipos en grandes corporaciones y startups de alto impacto.
            </p>
            <p>
              Especialista en cultura organizacional, desarrollo de equipos y marca empleadora, combina su mirada estratégica con una profunda vocación por las personas — dentro y fuera de la cancha.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;