import React from "react";
import PropTypes from "prop-types";
import styles from '../input/input.module.scss';

const Input = ({ type, value, placeholder, handleChange }) => {
  if (type === 'submit') return (
    <input type={type} value="Submit" />
  )

  return (
    <input className={styles.input} type={type} value={value} onChange={handleChange}  placeholder={placeholder} />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: '',
  value: '',
}

export default Input;
