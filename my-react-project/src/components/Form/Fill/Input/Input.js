/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "./Input.scss";

const Input = (props) => {
  const handleInput = (ev) => {
    const value = ev.target.value;
    const id = ev.target.id;
    // console.log(value);
    props.sendInput(id, value);
  };

  return (
    <div className="form">
      <label htmlFor={props.inputName}>{props.inputLabel}</label>
      <input
        onChange={handleInput}
        className="form__inp"
        type={props.inputType}
        id={props.inputName}
        name={props.inputName}
        placeholder={"Ej: " + props.inputPlaceholder}
        required
        value={props.inputValue}
      />
    </div>
  );
};

export default Input;
