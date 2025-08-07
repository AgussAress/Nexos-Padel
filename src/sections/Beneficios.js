// src/sections/Beneficios.js
import React from "react";
import "../styles/Beneficios.css";
import { FaHandshake, FaHeart, FaSmile, FaUsers, FaRunning, FaUserFriends, FaBalanceScale } from "react-icons/fa";

const beneficios = [
  { icon: <FaHandshake />, title: "Trabajo en equipo", text: "El pádel refuerza la colaboración y la estrategia conjunta entre compañeros." },
  { icon: <FaBalanceScale />, title: "Respeto", text: "Promueve el respeto por el otro y las reglas, esenciales en cualquier entorno laboral." },
  { icon: <FaRunning />, title: "Perseverancia", text: "Cada punto enseña constancia, superación y compromiso." },
  { icon: <FaUsers />, title: "Socialización", text: "Fomenta vínculos reales fuera del ambiente de oficina." },
  { icon: <FaHeart />, title: "Bienestar", text: "La actividad física mejora la salud mental y reduce el sedentarismo." },
  { icon: <FaUserFriends />, title: "Inclusión", text: "Es un deporte accesible para todos los niveles y edades." },
  { icon: <FaSmile />, title: "Antiestrés", text: "El deporte libera tensiones y mejora el ambiente de trabajo." },
];

const Beneficios = () => {
  return (
    <section id="beneficios" className="beneficios">
      <div className="beneficios-container" data-aos="fade-up">
        <h2>Beneficios del Team Building con Pádel</h2>
        <div className="beneficios-grid">
        {beneficios.map((item, index) => (
  <div
    className={`beneficio-card ${index >= 4 ? 'centered-card' : ''}`}
    key={index}
    data-aos="zoom-in"
    data-aos-delay={index * 100}
  >
    <div className="icono">{item.icon}</div>
    <h4>{item.title}</h4>
    <p>{item.text}</p>
  </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
