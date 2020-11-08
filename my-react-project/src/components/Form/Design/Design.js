/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import FormMenu from "../FormMenu/FormMenu";
import "./Design.scss";
import propTypes from "prop-types";

class Design extends Component {
  constructor(props) {
    super(props);
    this.hide = "shown";
    this.handleDropdown = this.handleDropdown.bind(this);
  }
  handleDropdown(ev) {
    if (this.hide === "shown") {
      this.hide = "hidden";
    } else {
      this.hide = "shown";
    }

    this.forceUpdate();
  }

  render() {
    return (
      <fieldset className="design">
        <FormMenu
          fieldsetName="design"
          fieldsetTitle="Diseña"
          fieldsetIcon="far fa-object-ungroup"
          handleMenuClick={this.handleDropdown}
        />
        <div className={"js-design colors " + this.hide}>
          <h3 className="colors__title">Colores</h3>
          <div className="color__palets">
            <div className="color-palette-1">
              <input
                className="js-palette-green js-palettes input1"
                type="radio"
                id="color-palette-1"
                name="color"
                value="color-palette-1"
                checked
              />
              <div className="palette1-1"></div>
              <div className="palette1-2"></div>
              <div className="palette1-3"></div>
            </div>
            <div className="color-palette-2">
              <input
                className="js-palette-red js-palettes input2"
                type="radio"
                id="color-palette-2"
                name="color"
                value="color-palette-2"
              />
              <div className="palette2-1"></div>
              <div className="palette2-2"></div>
              <div className="palette2-3"></div>
            </div>
            <div className="color-palette-3">
              <input
                className="js-palette-grey js-palettes input3"
                type="radio"
                id="color-palette-3"
                name="color"
                value="color-palette-3"
              />
              <div className="palette3-1"></div>
              <div className="palette3-2"></div>
              <div className="palette3-3"></div>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default Design;
