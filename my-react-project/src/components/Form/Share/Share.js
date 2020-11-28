/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Share.scss";
import { useEffect, useState } from "react";
import { sendData } from "../../../services/api";

const Share = (props) => {
  const [dataButton, setDataButton] = useState(props.data);
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [hideError, setHideError] = useState("hide-share");
  const [hideSuccess, setHideSuccess] = useState("hide-share");
  const [colorButton, setColorButton] = useState("create-btn__button");
  const [hideAll, setHideAll] = useState("hide-share");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setDataButton(props.data);
    setColorButton("create-btn__button--clicked");
    setHideAll("");
  };

  //ciclo de vida
  useEffect(() => {
<<<<<<< HEAD
    console.log("Ejecuto el fetch");
    sendData(dataButton).then((result) => {
      console.log("Resultado ", result);
=======
    setLoading(true);
    sendData(dataButton).then((result) => {
      setLoading(false);
>>>>>>> main
      if (result.success === true) {
        setLink(result.cardURL);
        setHideSuccess("");
        setHideError("hide-share");
      } else {
        setError(result.error);
        setHideError("");
        setHideSuccess("hide-share");
      }
    });
  }, [dataButton]);

  return (
    <>
      <div className="create-btn">
        <button type="button" className={colorButton} onClick={handleClick}>
          <i className="fa fa-id-card-o create-btn__icon"></i>
          Crear tarjeta
        </button>
      </div>
      <div className={hideAll}>
<<<<<<< HEAD
        <p className={"error " + hideError}>ERROR: {error}</p>
        <div className={"success " + hideSuccess}>
          <p className="success__text">La tarjeta ha sido creada:</p>
          <a
            href={link}
            className="success__link"
            target="_blank"
            rel="noreferrer"
          >
            {link}
          </a>
          <a
            href={"https://twitter.com/intent/tweet?url=" + link}
            title="Link para compartir en twitter"
            target="_blank"
            rel="noreferrer"
            className="success__link--twitter"
          >
            <i
              className="fab fa-twitter success__icon"
              aria-hidden="true"
              aria-label="Compartir en Twitter"
            ></i>
            Compartir en twitter
          </a>
        </div>
=======
        {loading === true ? (
          <div className="loading">
            <i className="fa fa-spinner"></i>
            <p>Enviando tus datos... </p>
          </div>
        ) : (
          <>
            <p className={"error " + hideError}>ERROR: {error}</p>
            <div className={"success " + hideSuccess}>
              <p className="success__text">La tarjeta ha sido creada:</p>
              <a
                href={link}
                className="success__link"
                target="_blank"
                rel="noreferrer"
              >
                {link}
              </a>
              <a
                href={"https://twitter.com/intent/tweet?url=" + link}
                title="Link para compartir en twitter"
                target="_blank"
                className="success__link--twitter"
              >
                <i
                  className="fa fa-twitter success__icon"
                  aria-hidden="true"
                  aria-label="Compartir en Twitter"
                ></i>
                Compartir en twitter
              </a>
            </div>
          </>
        )}
>>>>>>> main
      </div>
    </>
  );
};

export default Share;
