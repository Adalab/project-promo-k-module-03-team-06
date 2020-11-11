/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

import "./Design.scss";

class Design extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="colors">
        <h3 className="colors__title">Colores</h3>
        <div className="color__palets">
          <div className="color-palette-1">
            <input
              className="input1"
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
              className="input2"
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
              className="input3"
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
    );
  }
}

export default Design;
