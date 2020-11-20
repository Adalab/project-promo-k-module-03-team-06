import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";
import Image from "../images/logofridakards.png";
import "../stylesheets/layout/_main.scss";

const Landing = () => {
  return (
    <div class="landing">
      <main class="main" role="main">
        <a
          href="#"
          title="Frida Kards"
          class="main__logo"
          aria-label="Logotipo de Frida Kards"
        >
          <img src={Image} class="main__image" alt="" />
        </a>
        <h1 class="main__title">Crea tu tarjeta de visita</h1>
        <p class="main__text">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
        <section class="steps">
          <article class="steps__article">
            <i
              class="far fa-object-ungroup steps__icon"
              aria-label="Diseña"
            ></i>
            <p class="steps__text">Diseña</p>
          </article>
          <article class="steps__article">
            <i class="far fa-keyboard steps__icon" aria-label="Rellena"></i>
            <p class="steps__text">Rellena</p>
          </article>
          <article class="steps__article">
            <i class="fas fa-share-alt steps__icon" aria-label="Comparte"></i>
            <p class="steps__text">Comparte</p>
          </article>
        </section>
        <Link to="/PetCodeGirls-Card-Creator">
          <button
            class="main__link"
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
