/* eslint-disable no-useless-constructor */
import React, { useState } from "react";
import menuIcon from "../../../images/fridacolor.png";
import "./FormMenu.scss";

const FormMenu = (props) => {
  const [collapse, setCollapse] = useState("hidden");

  const handleCollapse = (ev) => {
    //PENDIENTE TERMINAR COLAPSABLES
    const id = ev.currentTarget.id;
    if (id === "design") {
    }
  };

  // handleCollapse() {
  // 	this.setState(() => {
  // 		let isCollapse;
  // 		// let arrowUp;
  // 		if (this.state.collapse === 'hidden') {
  // 			isCollapse = '';
  // 			// arrowUp = 'arrow-up';
  // 		} else {
  // 			isCollapse = 'hidden';
  // 			// arrowUp = '';
  // 		}
  // 		return { collapse: isCollapse };
  // 	});
  // }

  return (
    <div className={collapse} id={props.fieldsetName}>
      <div onClick={handleCollapse}>
        <legend className="legend">
          <i className={props.fieldsetIcon + " legend__icon"}></i>
          <h2 className="legend__title">{props.fieldsetTitle}</h2>
          <img
            src={menuIcon}
            alt="Menu"
            className="legend__arrow"
            aria-label="Desplegar"
          />
        </legend>
      </div>
      <div className="hide">{props.children}</div>
    </div>
  );
};

export default FormMenu;
