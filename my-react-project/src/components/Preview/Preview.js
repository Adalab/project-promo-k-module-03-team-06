/* eslint-disable no-useless-constructor */
import "./Preview.scss";
import CardLink from "./CardLink/CardLink";
import Reset from "./Reset/Reset";
import Image from "../../images/Frida480x400gif.gif";

const Preview = (props) => {
  const photo = props.photo || Image;
  return (
    <section className="card-preview">
      <Reset handleClickReset={props.handleClickReset} />
      <div className={"card " + props.palette}>
        <div className="card-head">
          <h1 className="card-head__title">
            {props.name || "Nombre Apellido"}
          </h1>
          <h2 className="card-head__subtitle">
            {props.job || "Front-end developer"}
          </h2>
        </div>
        <div
          className="card__image js__profile-image"
          // src={props.photo || Image}
          // alt={props.name}
          style={{ backgroundImage: "url(" + photo + ")" }}
        ></div>
        <ul className="card-list">
          <CardLink
            linkType="tel"
            linkAria="Teléfono"
            linkIcon="fa fa-mobile"
            link={"tel:" + props.phone}
          />

          <CardLink
            linkType="email"
            linkAria="Email"
            linkIcon="fa fa-envelope"
            link={"mailto:" + props.email}
          />

          <CardLink
            linkType="linkedin"
            linkAria="Linkedin"
            linkIcon="fa fa-linkedin"
            link={"https://www.linkedin.com/in/" + props.linkedin}
          />

          <CardLink
            linkType="github"
            linkAria="Github"
            linkIcon="fa fa-github-alt"
            link={"https://github.com/" + props.github}
          />
        </ul>
      </div>
    </section>
  );
};

export default Preview;
