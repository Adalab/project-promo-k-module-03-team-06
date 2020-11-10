/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import menuIcon from "../../../images/fridacolor.png";
import "./FormMenu.scss";

class FormMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: "hidden",
    };

    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleCollapse() {
    this.setState(() => {
      let isCollapse;
      if (this.state.collapse === "hidden") {
        isCollapse = "";
      } else {
        isCollapse = "hidden";
      }
      return { collapse: isCollapse };
    });
  }

  render() {
    return (
      <>
        <div
          className={"js-" + this.props.fieldsetName + "-collapsable"}
          onClick={this.handleCollapse}
        >
          <legend className="legend">
            <i className={this.props.fieldsetIcon + " legend__icon"}></i>
            <h2 className="legend__title">{this.props.fieldsetTitle}</h2>
            <img
              src={menuIcon}
              alt="Menu"
              className={
                "js-arrow-" + this.props.fieldsetName + "legend__arrow arrow-up"
              }
              aria-label="Desplegar"
            />
          </legend>
        </div>
        <div className={this.state.collapse}>{this.props.children}</div>
      </>
    );
  }
}

export default FormMenu;
