/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Share.scss";
import { useEffect, useState } from "react";
import { sendData } from "../../../services/api";

const Share = (props) => {
  const [data, setData] = useState(props.data);
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [hide, setHide] = useState("hide-all");
  const [hiddenLink, setHiddenLink] = useState("hide-link");
  const [hiddenError, setHiddenError] = useState("hide-error");
  const [buttonColor, setButtonColor] = useState("create-btn__button");

  const getLink = () => {
    setData(props.data);
    setHide("");
    setButtonColor("create-btn__button--clicked");
  };

  useEffect(() => {
    sendData(data).then((result) => {
      console.log(result);
      if (result.success === true) {
        setLink(result.cardURL);
        console.log(link);
        setHiddenLink("");
        setHiddenError("hide-error");
      } else {
        setError(result.error);
        console.log(error);
        setHiddenLink("hide-link");
        setHiddenError("");
      }
    });
  }, [data]);

  return (
    <>
      <div className="create-btn">
        <button type="button" className={buttonColor} onClick={getLink}>
          <i className="far fa-address-card create-btn__icon"></i>
          Crear tarjeta
        </button>
      </div>
      <p className={"error-message " + hiddenError + " "}>{error}</p>
      <div className={"success " + hiddenLink + " " + hide}>
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
    </>
  );
};

export default Share;
