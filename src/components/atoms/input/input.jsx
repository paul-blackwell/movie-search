import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import styles from './input.module.scss';

const Input = ({
  id, className, type, value, placeholder, handleChange,
}) => (
  <input
    id={id}
    className={`${className} ${styles.input}`}
    type={type}
    value={value}
    onChange={handleChange}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  id: PropTypes.number,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  id: uuid(),
  className: '',
  placeholder: '',
  value: '',
};

export default Input;
