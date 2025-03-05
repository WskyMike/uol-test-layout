import "./Main.css";
import img from "../assets/img.webp";
import flipboard from "../assets/logos-footer/icons-flipboard.svg";
import instagram from "../assets/logos-footer/icons-instagram.svg";
import pinterest from "../assets/logos-footer/icons-pinterest.svg";
import youtube from "../assets/logos-footer/icons-youtube.svg";

const Main = () => {
  return (
    <main className="main">
      <header className="main__header">
        <span className="main__header-category">Esporte</span>
        <h1 className="main__header-title">
          Mbappé marca, mas França só empata com a Polônia e avança como 2ª do
          grupo
        </h1>
      </header>

      <div className="main__info">
        <div className="main__setting">
          <div className="main__place">Do UOL, em São Paulo</div>
          <div className="main__date">25/06/2024 14h55</div>
        </div>
        <div className="main__social">
          <a href="#" className="footer__credits-social-icon">
            <img
              src={instagram}
              alt="Instagram"
              className="footer__credits-social-icon"
            />
          </a>
          <a href="#" className="footer__credits-social-icon">
            <img
              src={pinterest}
              alt="Pinterest"
              className="footer__credits-social-icon"
            />
          </a>
          <a href="#" className="footer__credits-social-icon">
            <img
              src={flipboard}
              alt="Flipboard"
              className="footer__credits-social-icon"
            />
          </a>
          <a href="#" className="footer__credits-social-icon">
            <img
              src={youtube}
              alt="YouTube"
              className="footer__credits-social-icon"
            />
          </a>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content-text">
          <div className="main__content-image-wrapper">
            <img
              src={img}
              className="main__content-image"
              alt="France vs Poland match"
            />
            <div className="main__content-image-description">
              França empata com a Polonia e avança as oitavas como segunda da
              chave Imagem: Bernd Thissen/picture alliance via Getty Images
            </div>
          </div>
          Na volta de Mbappé, a França apenas empatou em 1 a 1 com a Polônia e
          deixou escapar a liderança do Grupo D da Eurocopa. O resultado nesta
          terça-feira (25), somado à vitória da Áustria sobre a Holanda,
          derrubou os franceses para a segunda colocação. A França avançou às
          oitavas de final, e a Polônia se despediu da Euro. Os poloneses
          terminaram na lanterna da chave, com apenas um ponto. A Áustria
          terminou na ponta do Grupo D, com seis pontos.
        </div>
      </div>
    </main>
  );
};

export default Main;
