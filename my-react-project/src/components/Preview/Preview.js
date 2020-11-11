/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "./Preview.scss";
import CardLink from "./CardLink/CardLink";
import Reset from "./Reset/Reset";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="card-preview">
        <Reset />
        <div className="card">
          <div className="card-head">
            <h1 className="card-head__title">Nombre Apellido</h1>
            <h2 className="card-head__subtitle">Front-end developer</h2>
          </div>
          <div className="card__image js__profile-image"></div>
          <ul className="card-list">
            <CardLink
              linkType="tel"
              linkAria="Teléfono"
              linkIcon="fas fa-mobile-alt"
            />

            <CardLink
              linkType="email"
              linkAria="Email"
              linkIcon="fas fa-envelope"
            />

            <CardLink
              linkType="linkedin"
              linkAria="Linkedin"
              linkIcon="fab fa-linkedin-in"
            />

            <CardLink
              linkType="github"
              linkAria="Github"
              linkIcon="fab fa-github-alt"
            />
          </ul>
        </div>
      </section>
    );
  }
}

export default Preview;
