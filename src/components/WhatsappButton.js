// src/components/WhatsappButton.js
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsappButton.css";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5491155800317"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappButton;
