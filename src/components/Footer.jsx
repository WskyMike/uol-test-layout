import "./Footer.css";
import canaluol from "../assets/logos-footer/logos-canaluol.svg";
import ecoa from "../assets/logos-footer/logos-ecoa.svg";
import nossa from "../assets/logos-footer/logos-nossa.svg";
import splash from "../assets/logos-footer/logos-splash.svg";
import tab from "../assets/logos-footer/logos-tab.svg";
import tilt from "../assets/logos-footer/logos-tilt.svg";
import universa from "../assets/logos-footer/logos-universa.svg";
import vivabem from "../assets/logos-footer/logos-vivabem.svg";
import compras from "../assets/logos-footer/logos-guia-de-compras.svg";
import gplay from "../assets/logos-footer/logos-gplay.svg";
import appstore from "../assets/logos-footer/logos-appstore.svg";
import facebook from "../assets/logos-footer/icons-facebook.svg";
import flipboard from "../assets/logos-footer/icons-flipboard.svg";
import instagram from "../assets/logos-footer/icons-instagram.svg";
import pinterest from "../assets/logos-footer/icons-pinterest.svg";
import youtube from "../assets/logos-footer/icons-youtube.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Header logos section */}
        <div className="footer__header">
          <div className="footer__header-logo">
            <img src={splash} alt="Splash" />
          </div>
          <div className="footer__header-logo">
            <img src={universa} alt="Universa" />
          </div>
          <div className="footer__header-logo">
            <img src={vivabem} alt="VivaBem" />
          </div>
          <div className="footer__header-logo">
            <img src={ecoa} alt="ECOA" />
          </div>
          <div className="footer__header-logo">
            <img src={nossa} alt="nossa" />
          </div>
          <div className="footer__header-logo">
            <img src={tilt} alt="tilt" />
          </div>
          <div className="footer__header-logo">
            <img src={tab} alt="TAB" />
          </div>
          <div className="footer__header-logo">
            <img src={canaluol} alt="canal vol" />
          </div>
          <div className="footer__header-logo">
            <img src={compras} alt="compras" />
          </div>
        </div>
        {/* Divider section with links */}
        <div className="footer__divider">
          <div className="footer__list">
            <h3 className="footer__divider-column-title">Sobre o UOL</h3>
            <div className="footer__divider-column">
              <ul>
                <li>
                  <a href="#" className="footer__divider-link">
                    Conheça nossa história
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Denuncie
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Fale conosco
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Imprensa
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    SAC
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Segurança e privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Aviso de Direitos autorais
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__list">
            <h3 className="footer__divider-column-title">Para Você</h3>
            <div className="footer__divider-column">
              <ul>
                <li>
                  <a href="#" className="footer__divider-link">
                    PagBank
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Assine UOL
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Tenha um email @uol
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Bate-Papo UOL
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    UOL Antivirus
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    UOL Play
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    UOL Leia+
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Paulistão 2025
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className="footer__divider-link">
                    Clube UOL
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    UOL Resolve
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    UOL Sexo
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    UOL Wi-Fi
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Assistência técnica
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Passei Direto
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    UOL Educação
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    UOL Afiliados
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__list">
            <h3 className="footer__divider-column-title">Para seu negócio</h3>
            <div className="footer__divider-column">
              <ul>
                <li>
                  <a href="#" className="footer__divider-link">
                    Anuncie no UOL
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Cloud Computing
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Conecte
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Crie seu blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Crie seu site
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Crie sua loja virtual
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Dicas para o seu negócio
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Venda sem maquininha
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className="footer__divider-link">
                    Email marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Email profissional
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Hospedagem
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Maquininha de cartão
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    PagBank
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Registre um domínio
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Vende Fácil
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__list">
            <h3 className="footer__divider-column-title">Aplicativos</h3>
            <div className="footer__divider-column">
              <ul>
                <li>
                  <a href="#" className="footer__divider-link">
                    UOL Notícias
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Placar UOL
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    VivaBem
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Splash
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Universa
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Nossa
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    UOL Cotações
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Bate-Papo UOL
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    UOL Mail
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__divider-link">
                    Meu UOL
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer section with subscribe, contact and apps */}
        <div className="footer__footer">
          <div className="footer__footer-subscribe">
            <h3 className="footer__footer-subscribe-title">Assine UOL</h3>
            <a href="#" className="footer__footer-subscribe-text">
              Assine o UOL e tenha acesso ilimitado a notícias, vídeos e muito
              mais.
            </a>
          </div>

          <div className="footer__footer-contact">
            <h4 className="footer__footer-contact-title">Telefone</h4>
            <div className="footer__footer-contact-rows">
              <div className="footer__footer-contact-column">
                <p className="footer__footer-contact-number">4003-6118</p>
                <p>Capitais</p>
              </div>
              <div className="footer__footer-contact-column">
                <p className="footer__footer-contact-number">0800 703 300</p>
                <p>Demais localidades</p>
              </div>
            </div>
          </div>

          <div className="footer__footer-apps">
            <h4 className="footer__footer-apps-title">Baixe nossos apps</h4>
            <div className="footer__footer-apps-button-container">
              <a href="#" className="footer__footer-apps-button">
                <img
                  src={appstore}
                  alt="App Store"
                  className="footer__footer-apps-image"
                />
              </a>
              <a href="#" className="footer__footer-apps-button">
                <img
                  src={gplay}
                  alt="Google Play"
                  className="footer__footer-apps-image"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Credits section */}
        <div className="footer__credits">
          <p className="footer__credits-copyright">
            1996-2025 UOL O melhor conteúdo. Todos os direitos reservados.
          </p>

          <div className="footer__credits-social">
            <div className="footer__credits-links">
              <a href="#" className="footer__credits-link">
                Siga UOL Esporte
              </a>
            </div>
            <a href="#" className="footer__credits-social-icon">
              <img
                src={facebook}
                alt="Facebook"
                className="footer__credits-social-icon"
              />
            </a>
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
      </div>
    </footer>
  );
};

export default Footer;
