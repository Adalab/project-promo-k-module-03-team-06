/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

import Input from "./Input/Input";
import InputImage from "./InputImage/InputImage";
import "./Fill.scss";

class Fill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="js-fill">
        <Input
          inputName="name"
          inputLabel="Nombre completo"
          inputType="text"
          inputPlaceholder="Frida Kahlo"
        />
        <Input
          inputName="job"
          inputLabel="Puesto"
          inputType="text"
          inputPlaceholder="Pintora"
        />

        <InputImage />

        <Input
          inputName="email"
          inputLabel="Email"
          inputType="email"
          inputPlaceholder="frida.Kahlo@gmail.com"
        />
        <Input
          inputName="phone"
          inputLabel="Teléfono"
          inputType="tel"
          inputPlaceholder="666 555 444"
        />
        <Input
          inputName="linkedin"
          inputLabel="LinkedIn"
          inputType="text"
          inputPlaceholder="linkedin.com/in/frida-kahlo"
        />
        <Input
          inputName="github"
          inputLabel="GitHub"
          inputType="text"
          inputPlaceholder="frida-kahlo"
        />
      </div>
    );
  }
}

export default Fill;
