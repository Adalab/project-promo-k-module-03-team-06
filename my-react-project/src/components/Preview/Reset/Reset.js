/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "./Reset.scss";

const Reset = (props) => {
  const handleReset = () => {
    props.sendReset();
  };

  return (
    <div className="card-reset">
      <button
        onClick={handleReset}
        type="reset"
        className="card-reset__btn"
        aria-label="Reset"
      >
        <i className="far fa-trash-alt"></i>
        Reset
      </button>
    </div>
  );
};

export default Reset;
