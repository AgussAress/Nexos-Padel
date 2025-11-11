// src/sections/Partners.js
import React from "react";
import "../styles/Partners.css";
import { FaHandshake, FaUserTie, FaUsers, FaBuilding, FaPlane } from "react-icons/fa";

// ASUME QUE ESTAS IMÁGENES ESTÁN EN TU CARPETA DE ASSETS
import marioZayasImg from "../assets/marioZayas.jpg"; 
import diegoCimiottoImg from "../assets/DiegoCimotto.jpg"; 
import clubNobleGebaImg from "../assets/nobleGeba.png"; 
import fernandaTolozaImg from "../assets/ferToloza.png"; 

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

          {/* MARIO ZAYAS */}
          <div className="partner-card" data-aos="fade-right">
            <div className="partner-img-container">
              <img src={marioZayasImg} alt="Mario Zayas" className="partner-img" />
            </div>
            <h3>Mario Zayas</h3>
            <h4>Coordinador de la actividad deportiva</h4>
            <p>
              A cargo del Staff de profesores. Entrenador Profesional de Padel, coach, formador de jugadores y profesores.
            </p>
            <p>
              Más de 20 años de experiencia, entrenando jugadores/as de todos los niveles en diferentes etapas de su carrera. Estuvo a cargo de la Formación de deportistas profesionales como Delfina Brea, Aranza Osoro, Denis Perino, entre otros.
            </p>
          </div>

          {/* LIC. DIEGO CIMIOTTO */}
          <div className="partner-card" data-aos="fade-up">
            <div className="partner-img-container">
              <img src={diegoCimiottoImg} alt="Lic Diego Cimiotto" className="partner-img" />
            </div>
            <h3>Lic Diego Cimiotto</h3>
            <h4>CHRO y Lic. En Psicología, Ceo Limón Consultora RH</h4>
            <p>
              Con más de 20 años de experiencia gestionando talento en diversas industrias. Su trayectoria combina un enfoque estratégico y humano, orientado a maximizar el potencial de las personas y alcanzar los objetivos organizacionales.
            </p>
            <p>
              A cargo de la charla de Bienestar Organizacional.
            </p>
          </div>

          {/* FERNANDA TOLOZA */}
          <div className="partner-card" data-aos="fade-up" data-aos-delay="200">
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
          
          {/* CLUB NOBLE GEBA */}
          <div className="partner-card" data-aos="fade-left">
            <div className="partner-img-container">
              <img src={clubNobleGebaImg} alt="Club Noble Geba" className="partner-img" />
            </div>
            <h3>Club Noble Geba</h3>
            <p>
              Un predio extraordinario, ubicado en pleno Palermo, frente a la sede San Martín del Club GEBA.
            </p>
            <p>
              Disponemos de cuatro canchas de pádel techadas, un bar, vestuarios totalmente equipados, estacionamiento privado, seguridad y personal médico presente en el complejo las 24 horas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;