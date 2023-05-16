import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

function Input(props) {
  const onChange = (evt) => {
    props.onChange(evt.target.value);
  };

  return (
    <input
      className='hex-input-box'
      value={props.value}
      onChange={onChange}
      maxLength={7}
    />
  );
}

export default Input;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};