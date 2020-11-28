import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";
import Image from "../images/logofridakards.png";
import "../stylesheets/layout/_main.scss";

const Landing = () => {
  return (
    <div className="landing">
      <main className="main" role="main">
        <img
          src={Image}
          className="main__image main__logo"
          alt="Frida Kards"
          title="Frida Kards"
        />

        <h1 className="main__title">Crea tu tarjeta de visita</h1>
        <p className="main__text">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
        <section className="steps">
          <article className="steps__article">
            <i
              className="far fa-object-ungroup steps__icon"
              aria-label="Diseña"
            ></i>
            <p className="steps__text">Diseña</p>
          </article>
          <article className="steps__article">
            <i className="far fa-keyboard steps__icon" aria-label="Rellena"></i>
            <p className="steps__text">Rellena</p>
          </article>
          <article className="steps__article">
            <i
              className="fas fa-share-alt steps__icon"
              aria-label="Comparte"
            ></i>
            <p className="steps__text">Comparte</p>
          </article>
        </section>
        <Link className="link-to-cardcreator" to="/PetCodeGirls-Card-Creator">
          <button
            className="main__link"
            title="Ir a crear mi tarjeta"
            aria-label="Comienza a crear tu tarjeta"
          >
            Comenzar
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
