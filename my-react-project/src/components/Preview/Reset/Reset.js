import React, { Component } from "react";
import "./Reset.scss";

class Reset extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-reset">
        <button
          type="reset"
          className="card-reset__btn js-reset"
          aria-label="Reset"
        >
          <i className="far fa-trash-alt"></i>
          Reset
        </button>
      </div>
    );
  }
}

export default Reset;
