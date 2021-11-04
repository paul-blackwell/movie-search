import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import styles from './select.module.scss';

const Select = ({
  id, className, value, handleChange, options,
}) => (
  <div className={styles.select}>
    <select
      id={id}
      className={`${className} ${styles.select__select}`}
      value={value}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option
          key={uuid()}
          className={styles.select__option}
          value={option.name}
        >
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  id: PropTypes.number,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.node).isRequired,
};

Select.defaultProps = {
  id: uuid(),
  className: '',
};

export default Select;
