/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "./Reset.scss";

const Reset = (props) => {
  const handleClickReset = () => {
    props.handleClickReset();
  };

  return (
    <div className="card-reset">
      <button
        type="reset"
        className="card-reset__btn"
        aria-label="Reset"
        onClick={handleClickReset}
      >
        <i className="far fa-trash-alt"></i>
        Reset
      </button>
    </div>
  );
};

export default Reset;
