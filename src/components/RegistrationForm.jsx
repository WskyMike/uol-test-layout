import "./RegistrationForm.css";
import { useEffect } from "react";

import UOLlogo from "../assets/icons-header/logos-uol.svg";

const RegForm = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={UOLlogo} alt="Logo" className="modal__logo" />

        <p className="modal__description">
          Cadastre-se para acessar nossa plataforma.
        </p>

        <div className="modal__input-wrapper">
          <input type="text" placeholder="Nome" className="modal__input" />
          <input type="text" placeholder="Sobrenome" className="modal__input" />
          <input type="email" placeholder="E-mail" className="modal__input" />
          <input type="tel" placeholder="Telefone" className="modal__input" />
        </div>

        <button type="button" className="modal__register-btn">
          Registrar-se
        </button>

        <p className="modal__login-text">
          Já tem uma conta?{" "}
          <a href="#" className="modal__login-link">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegForm;
