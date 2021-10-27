import React from "react";
import PropTypes from "prop-types";
import styles from "../input/input.module.scss";

const Input = ({  className, type, value, placeholder, handleChange }) => {
  return (
    <input
      className={`${className} ${styles.input}`}
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  className: "",
  placeholder: "",
  value: "",
};

export default Input;
