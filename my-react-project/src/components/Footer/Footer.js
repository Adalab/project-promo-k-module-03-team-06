/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import footerLogo from "../../images/logofooter.png";
import adalabLogo from "../../images/logo-adalab.png";
import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer" role="contentinfo">
        <div className="footer__copy2020">
          <img
            src={footerLogo}
            className="footer__logofrida"
            alt="Logo Frida Kards"
          />
          <small className="footer__copy">&copy; 2020</small>
        </div>
        <a
          href="https://adalab.es/"
          title="Ir a la web de Adalab"
          aria-label="Ir a la web de Adalab"
        >
          <img
            src={adalabLogo}
            alt="Logo Adalab"
            title="Logotipo de Adalab"
            className="footer__logo"
            aria-label="Logotipo de Adalab"
          />
        </a>
      </footer>
    );
  }
}

export default Footer;
