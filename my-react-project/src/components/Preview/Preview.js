/* eslint-disable no-useless-constructor */
import "./Preview.scss";
import CardLink from "./CardLink/CardLink";
import Reset from "./Reset/Reset";
import Image from "../../images/Frida480x400gif.gif";

const Preview = (props) => {
  console.log(props.photo);
  return (
    <section className="card-preview">
      <Reset />
      <div className="card">
        <div className="card-head">
          <h1 className="card-head__title">
            {props.name || "Nombre Apellido"}
          </h1>
          <h2 className="card-head__subtitle">
            {props.job || "Front-end developer"}
          </h2>
        </div>
        <img
          className="card__image js__profile-image"
          // Ruta MAL!!!!!
          src={props.photo || Image}
          alt={props.name}
        />
        <ul className="card-list">
          <CardLink
            linkType="tel"
            linkAria="Teléfono"
            linkIcon="fas fa-mobile-alt"
            link={props.tel}
          />

          <CardLink
            linkType="email"
            linkAria="Email"
            linkIcon="fas fa-envelope"
            link={props.email}
          />

          <CardLink
            linkType="linkedin"
            linkAria="Linkedin"
            linkIcon="fab fa-linkedin-in"
            link={props.linkedin}
          />

          <CardLink
            linkType="github"
            linkAria="Github"
            linkIcon="fab fa-github-alt"
            link={props.github}
          />
        </ul>
      </div>
    </section>
  );
};

export default Preview;
