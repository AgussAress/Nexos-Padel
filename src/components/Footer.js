// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";
import { FaInstagram, } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Nexos Padel</h3>
          <p>Conectamos equipos a través del deporte.</p>
        </div>

        <div className="footer-nav">
          <h4>Secciones</h4>
          <ul>
            <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#mision">Misión</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-redes">
          <h4>Redes</h4>
          <div className="redes-icons">
            <a href="https://www.instagram.com/nexospadel/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            
          </div>
          <a href="https://wa.me/5491155800317" target="_blank" rel="noreferrer" className="footer-whatsapp">WhatsApp</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nexos Padel Team. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
