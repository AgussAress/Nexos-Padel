// src/components/Experiencias.js

import React from "react";
import "../styles/Experiencias.css";
import { FaUsers, FaGift, FaClipboardList } from "react-icons/fa"; 
// Importé dos nuevos iconos para darte opciones, FaFutbol o FaClipboardList podrían funcionar
import teamImg from "../assets/catering.jpg";
import clientesImg from "../assets/morfando.jpeg";
// Asegúrate de tener una imagen para esta sección. Si no, renombra una existente temporalmente.
import clinicasImg from "../assets/clinicas.jpg"; 

const Experiencias = () => {
  return (
    <section id="experiencias" className="experiencias">
      <div className="experiencias-container" data-aos="fade-up">
        <h2>Tipos de Experiencias</h2>
        <div className="cards">
          {/* PRIMERA TARJETA: TEAM BUILDING */}
          <div className="card team-building" data-aos="fade-right">
            <div className="card-content">
              <div className="texto">
                <div className="icono"><FaUsers /></div>
                <h3>Team Building</h3>
                <p>
                  Ofrecemos una experiencia integral de pádel y gastronomía diseñada para ir más allá de la diversión, 
                  el propósito principal es fortalecer lazos, mejorar la comunicación y potenciar el espíritu de equipo de una manera única y efectiva.
                </p>
              </div>
              <div className="experiencia-imagen">
                <img src={teamImg} alt="Team Building" />
              </div>
            </div>
          </div>

          {/* SEGUNDA TARJETA: CLÍNICAS DE PÁDEL (NUEVA) */}
          <div className="card clinicas" data-aos="fade-left"> {/* Añadimos la nueva clase "clinicas" */}
            <div className="card-content">
              <div className="texto">
                <div className="icono"><FaClipboardList /></div> {/* Puedes cambiar FaFutbol por FaClipboardList o cualquier otro icono que te guste */}
                <h3>Clínicas de Pádel</h3>
                <p>
                  Para mejorar el rendimiento de tu equipo, nos adaptamos a las necesidades de tu empresa, 
                  te ayudamos a transformar la dinámica a través de diferentes situaciones de juego y actividades en un ambiente relajado y lúdico.
                </p>
              </div>
              <div className="experiencia-imagen">
                <img src={clinicasImg} alt="Clínicas de Pádel" />
              </div>
            </div>
          </div>
          
          {/* TERCERA TARJETA: FIDELIZACIÓN DE CLIENTES */}
          <div className="card fidelizacion" data-aos="fade-right"> {/* Cambiamos la animación a fade-right para que se vea bien en el orden */}
            <div className="card-content">
              <div className="texto">
                <div className="icono"><FaGift /></div>
                <h3>Fidelización de Clientes</h3>
                <p>
                  Eventos exclusivos diseñados para agasajar a tus clientes, reforzar relaciones comerciales
                  y destacar tu marca a través de una propuesta original y de alto valor percibido.
                </p>
              </div>
              <div className="experiencia-imagen">
                <img src={clientesImg} alt="Fidelización" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experiencias;