// src/sections/Contacto.js
import React from "react";
import "../styles/Contacto.css";
import { FaWhatsapp } from "react-icons/fa";

const Contacto = () => {
  return (
    <section id="contacto" className="contacto">
      <div className="contacto-box" data-aos="fade-up">
        <h2>Contacto</h2>
        <p className="contacto-subtitulo">
          Conectemos para crear una experiencia única
        </p>

        <form 
          action="https://formspree.io/f/mvgdozrq" // ⚠️ reemplazá con tu endpoint
          method="POST"
          className="formulario"
        >
          <input type="hidden" name="_next" value="https://nexospadel.com/gracias.html" />

          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            required
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows="5"
            required
          ></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>

        <a
          href="https://wa.me/5491155800317"
          target="_blank"
          rel="noreferrer"
          className="btn-contacto-wpp"
        >
          <FaWhatsapp className="wpp-icon" />
          Escribinos por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contacto;
