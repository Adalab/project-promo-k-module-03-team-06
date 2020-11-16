/* eslint-disable no-useless-constructor */
import "./CardLink.scss";

const CardLink = (props) => {
  return (
    <li>
      <a
        href={props.link || "/"}
        className="card-list__link"
        aria-label={props.linkAria}
      >
        <div className="card-list__icon-container">
          <i className={props.linkIcon + " card-list__icons"}></i>
        </div>
      </a>
    </li>
  );
};

export default CardLink;
