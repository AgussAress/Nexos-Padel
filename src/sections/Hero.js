// src/sections/Hero.js
import React from "react";
import Slider from "react-slick";
import "../styles/Hero.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/sonrisa.jpg";
import img2 from "../assets/pegando.avif";
import img3 from "../assets/Red.jpg";

const Hero = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    fade: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
  };

  const images = [img1, img2, img3];

  return (
    <section className="hero" id="hero">
      <Slider {...settings} className="hero-slider">
        {images.map((img, index) => (
          <div key={index} className="hero-slide">
            <div
              className="hero-bg"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </div>
        ))}
      </Slider>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>NEXOS PADEL</h1>
        <p className="subtitulo">Impulsamos equipos a través del pádel</p>
        <p className="descripcion">
          Organizamos experiencias de pádel para empresas que combinan juego, networking y conexión real.
          Creamos eventos únicos, adaptados a tus objetivos.
        </p>
        <a href="#contacto" className="hero-button">Organizá tu evento</a>
      </div>
    </section>
  );
};

export default Hero;
