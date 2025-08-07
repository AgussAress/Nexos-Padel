import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoNexos from "../assets/LogoPrincipalNexos.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" onClick={closeMenu}> {/* Cierra el menú al hacer clic en el logo */}
        <img src={LogoNexos} alt="Logo de Nexos Padel" className="logo-img" />
        </a>

        {/* Botón de hamburguesa para móviles */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />} {/* Muestra 'X' si está abierto, hamburguesa si está cerrado */}
        </div>

        {/* Lista de enlaces, con clase condicional para mostrar/ocultar */}
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
          <li><a href="#sobre-nosotros" onClick={closeMenu}>Nosotros</a></li>   
          <li><a href="#beneficios" onClick={closeMenu}>Beneficios</a></li> {/* Agregué Beneficios */}
          <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;