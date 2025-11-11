// src/sections/Experiencias.js
import React from "react";
import "../styles/Experiencias.css";
import { 
  FaUsers, 
  FaGift, 
  FaClipboardList, 
  FaPlaneDeparture, 
  FaShuttleVan, 
  FaTableTennis, 
  FaLightbulb, 
  FaGlobeAmericas, 
  FaBoxOpen 
} from "react-icons/fa"; 
import teamImg from "../assets/catering.jpg";
import clientesImg from "../assets/morfando.jpeg";
import clinicasImg from "../assets/clinicas.jpg";
import canchasPadel from "../assets/canchasPadel.jpg";

const Experiencias = () => {
  return (
    <section id="experiencias" className="experiencias">
      <div className="experiencias-container" data-aos="fade-up">
        <h2>Tipos de Experiencias</h2>
        <div className="cards">
          
          {/* TEAM BUILDING */}
          <div className="card team-building" data-aos="fade-right">
            <div className="card-content">
              <div className="texto">
                <div className="icono"><FaUsers /></div>
                <h3>Team Building</h3>
                <p>
                  Ofrecemos una experiencia integral de pádel y gastronomía diseñada para ir más allá de la diversión. 
                  El propósito principal es fortalecer lazos, mejorar la comunicación y potenciar el espíritu de equipo de una manera única y efectiva.
                </p>
              </div>
              <div className="experiencia-imagen">
                <img src={teamImg} alt="Team Building" />
              </div>
            </div>
          </div>

          {/* CLÍNICAS DE PÁDEL */}
          <div className="card clinicas" data-aos="fade-left">
            <div className="card-content">
              <div className="texto">
                <div className="icono"><FaClipboardList /></div>
                <h3>Clínicas de Pádel</h3>
                <p>
                  Para mejorar el rendimiento de tu equipo, nos adaptamos a las necesidades de tu empresa, 
                  ayudándote a transformar la dinámica a través de diferentes situaciones de juego y actividades en un ambiente relajado y lúdico.
                </p>
              </div>
              <div className="experiencia-imagen">
                <img src={clinicasImg} alt="Clínicas de Pádel" />
              </div>
            </div>
          </div>
          
          {/* FIDELIZACIÓN DE CLIENTES */}
          <div className="card fidelizacion" data-aos="fade-right">
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

          {/* VIAJES GRUPALES CORPORATIVOS - ESTRUCTURA MODIFICADA */}
          <div id="viajesGrupales" className="card viajes" data-aos="fade-left">
            
            {/* Título y descripción inicial */}
            <div className="viajes-header">
              <h3>Viajes Grupales Corporativos – Soluciones Integrales</h3>
              <p>
                Nos especializamos en el diseño y ejecución de viajes grupales y eventos “llave en mano” personalizados 
                según los objetivos de cada organización. Garantizamos una experiencia fluida y memorable desde el comienzo hasta el fin.
              </p>
            </div>
            
            {/* Imagen */}
            {/* 
              <div className="viajes-imagen-principal">
              <img src={canchasPadel} alt="Viajes Grupales Corporativos" />
            </div>
            */}
            

            {/* Subtítulo de detalles */}
            <div className="viajes-subheader">
              <h4>¿Cómo organizamos estos viajes?</h4>
            </div>

            {/* Detalles en formato tabla/grid de 2 columnas */}
            <div className="viajes-detalles">
              <div className="detalle">
                <div className="detalle-icono"><FaPlaneDeparture /></div>
                <div>
                  <strong>Selección de destino:</strong> Asesoramos en la elección del destino más adecuado en función de los objetivos del grupo, sus intereses y preferencias. Ya sea una ciudad, un club deportivo o un hotel, proponemos espacios que potencien la experiencia colectiva.
                </div>
              </div>
              <div className="detalle">
                <div className="detalle-icono"><FaShuttleVan /></div>
                <div>
                  <strong>Coordinación logística:</strong> Desde el momento de llegada, gestionamos todos los traslados y aspectos operativos del viaje. El grupo solo debe enfocarse en disfrutar y aprovechar cada instancia.
                </div>
              </div>
              <div className="detalle">
                <div className="detalle-icono"><FaTableTennis /></div>
                <div>
                  <strong>Programa de Pádel:</strong> Diseñamos experiencias deportivas adaptadas a la duración del viaje y a los objetivos del equipo. Ofrecemos desde jornadas intensivas hasta semanas completas de entrenamiento y juego.
                </div>
              </div>
              <div className="detalle">
                <div className="detalle-icono"><FaLightbulb /></div>
                <div>
                  <strong>Motivación y desarrollo grupal:</strong> Complementamos la actividad deportiva con espacios de reflexión y aprendizaje. Junto a nuestros mentores, facilitamos sesiones grupales y clínicas orientadas a abordar desafíos reales, fortalecer vínculos y promover el trabajo en equipo.
                </div>
              </div>
              <div className="detalle">
                <div className="detalle-icono"><FaGlobeAmericas /></div>
                <div>
                  <strong>Conexión con la cultura local:</strong> Cada destino ofrece una identidad única. Incorporamos actividades típicas, gastronomía regional y espacios de esparcimiento que permiten conectar con lo auténtico y enriquecer la vivencia.
                </div>
              </div>
              <div className="detalle">
                <div className="detalle-icono"><FaBoxOpen /></div>
                <div>
                  <strong>Servicios complementarios:</strong> Ofrecemos welcome packs, cobertura audiovisual, merchandising personalizado y otros recursos que transforman un buen evento en una experiencia inolvidable.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experiencias;