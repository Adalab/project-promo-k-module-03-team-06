/* eslint-disable no-useless-constructor */
import PropTypes from "prop-types";
import "./Input.scss";

const Input = (props) => {
  const handleInput = (ev) => {
    const value = ev.target.value;
    const id = ev.target.id;
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

Input.propTypes = {
  inputName: PropTypes.string,
  inputLabel: PropTypes.string,
};

export default Input;
