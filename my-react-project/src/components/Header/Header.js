/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import logo from "../../images/logoversion2.png";
import "./Header.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="cards-header" role="banner">
        <Link to="/">
          <img
            src={logo}
            alt="Logo de Frida Kards"
            title="Ir a la página de inicio"
            className="cards-header__logo"
            aria-label="Logotipo de Frida Kards"
          />
        </Link>
      </header>
    );
  }
}

export default Header;
