/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

import "./Share.scss";

class Share extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="create-btn js-share">
          <button type="button" className="create-btn__button js-createButton">
            <i className="far fa-address-card create-btn__icon"></i>
            Crear tarjeta
          </button>
        </div>
        <div className="success hidden js-success">
          <p className="success__text js-successText">
            La tarjeta ha sido creada:
          </p>
          <a
            href=""
            className="success__link js-createLink"
            target="_blank"
          ></a>
          <a
            href=""
            title="Link para compartir en twitter"
            target="_blank"
            className="success__link--twitter js-linkTwitter"
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
  }
}

export default Share;
