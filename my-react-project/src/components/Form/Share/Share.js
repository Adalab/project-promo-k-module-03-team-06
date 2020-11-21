/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Share.scss";
import { useEffect, useState } from "react";
import { sendData } from "../../../services/api";

const Share = (props) => {
  const [data, setData] = useState({});
  const [link, setLink] = useState("");

  const sendDataToApi = () => {
    sendData(props.data);
    setData(props.data);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="create-btn">
        <button
          type="button"
          className="create-btn__button"
          onClick={sendDataToApi}
        >
          <i className="far fa-address-card create-btn__icon"></i>
          Crear tarjeta
        </button>
      </div>
      <div className="success hidden">
        <p className="success__text">La tarjeta ha sido creada:</p>
        <a href="" className="success__link" target="_blank"></a>
        <a
          href=""
          title="Link para compartir en twitter"
          target="_blank"
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
