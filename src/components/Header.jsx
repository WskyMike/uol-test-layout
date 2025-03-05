import { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import UOLlogo from "../assets/icons-header/logos-uol.svg";
import seutime from "../assets/icons-header/seutime.svg";
import seusigno from "../assets/icons-header/seusigno.svg";
import profile from "../assets/icons-header/profile.svg";
import burgermenu from "../assets/icons-header/burger-menu.svg";
import arrowup from "../assets/icons-header/arrow-up.svg";
import "./Header.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__content">
          {/* Left side - Burger Menu and Logo */}
          <div className="header__left">
            <a href="#" className="header__burger-menu">
              <img
                src={burgermenu}
                alt="Burger Menu"
                className="header__burger-menu-icon"
              />
            </a>
            <div className="header__logo">
              <img src={UOLlogo} alt="UOL Logo" />
            </div>
          </div>

          {/* Middle - Navigation Items */}
          <nav className="header__nav">
            <div className="header__nav-item">
              <img src={seutime} alt="Lock Icon" className="header__icon" />
              <span className="header__text">Seu time</span>
            </div>
            <div className="header__nav-item">
              <img src={seusigno} alt="Clock Icon" className="header__icon" />
              <span className="header__text">Seu signo</span>
            </div>
            <div className="header__nav-item">
              <span className="header__text">Jogos</span>
            </div>
            <div className="header__nav-item">
              <span className="header__text">Dólar</span>
              <img src={arrowup} alt="Arrow" className="header__dollar-arrow" />
              <span className="header__dollar-value header__text ">5,916</span>
            </div>
          </nav>

          {/* Right side - Buttons */}
          <div className="header__buttons">
            <button
              className="header__button header__text header__button--login"
              onClick={() => setIsModalOpen(true)}
            >
              <img src={profile} alt="User Icon" className="header__icon" />
              Entre
            </button>
            <button className="header__button header__text header__button--subscribe">
              Assine UOL
            </button>
          </div>
        </div>
      </header>
      {isModalOpen && (
        <RegistrationForm onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default Header;
