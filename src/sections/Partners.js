import React from "react";
import "../styles/Partners.css";
import { FaHandshake, FaUserTie, FaUsers, FaBuilding } from "react-icons/fa";


const Partners = () => {
  return (
    <section id="partners" className="partners">
      <div className="partners-container" data-aos="fade-up">
        <div className="partners-header">
          <div className="partners-icon"><FaHandshake /></div>
          <h2>Nuestros Partners</h2>
          <h4>Aliados que amplifican cada experiencia</h4>
          <p>
            En cada evento que organizamos, trabajamos junto a una red de partners estratégicos que comparten nuestra visión:
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

          {/* Mario Zayas */}
          <div className="partner-card" data-aos="fade-right">
            <div className="partner-icon"><FaUsers /></div>
            <h3>Mario Zayas</h3>
            <h4>Coordinador de la actividad deportiva</h4>
            <p>
              A cargo del Staff de profesores. Entrenador Profesional de Pádel, coach, formador de jugadores y profesores.
            </p>
          </div>

          {/* Diego Cimiotto */}
          <div className="partner-card" data-aos="fade-up">
            <div className="partner-icon"><FaUserTie /></div>
            <h3>Lic. Diego Cimiotto</h3>
            <h4>Coach Ontológico - CEO Limón Consultora de RRHH</h4>
            <p>
              Con más de 20 años de experiencia gestionando talento en diversas industrias.
              Su trayectoria combina un enfoque estratégico y humano, orientado a maximizar el potencial de las personas
              y alcanzar los objetivos organizacionales.
            </p>
            <p><em>A cargo de la charla de Bienestar Organizacional.</em></p>
          </div>

          {/* Club Noble Geba */}
          <div className="partner-card" data-aos="fade-left">
            <div className="partner-icon"><FaBuilding /></div>
            <h3>Club Noble Geba</h3>
            <p>
              Un predio extraordinario, ubicado en pleno Palermo, frente a la sede San Martín del Club GEBA.
              Disponemos de cuatro canchas de pádel techadas, un bar, vestuarios totalmente equipados,
              estacionamiento privado, seguridad y personal médico presente en el complejo las 24 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
