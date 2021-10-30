import React from "react";
import PropTypes from "prop-types";
import styles from "../select/select.module.scss";
import { v4 as uuid } from "uuid";

const Select = ({ className, value, handleChange, options }) => (
  <div className={styles.select}>
    <select
      className={`${className} ${styles["select__select"]}`}
      value={value}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option
          key={uuid()}
          className={styles["select__option"]}
          value={option.name}
        >
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  className: PropTypes.string,
  // value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

Select.defaultProps = {
  className: "",
};

export default Select;
