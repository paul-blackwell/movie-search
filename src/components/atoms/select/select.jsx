import React from "react";
import PropTypes from "prop-types";
import styles from "../select/select.module.scss";
import { FiChevronDown } from "react-icons/fi";
import { v4 as uuid } from 'uuid';

const Select = ({ value, handleChange, options }) => (
  <div className={styles.select}>
    <select className={styles["select__select"]} value={value} onChange={handleChange}>
      {options.map((option) => (
        <option key={uuid()} className={styles["select__option"]} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  // value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default Select;
