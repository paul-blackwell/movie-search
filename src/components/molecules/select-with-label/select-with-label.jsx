import React from "react";
import PropTypes from "prop-types";
import styles from '../select-with-label/select-with-label.module.scss';
import Select from "../../atoms/select/select";

const SelectWithLabel = ({ label, options, value,  handleChange }) => {
  return (
    <div className={styles['select-with-label']}>
        <label className={styles['select-with-label__label']}>{label}</label>
        <Select value={value} handleChange={handleChange} options={options}/>
    </div>
  )
}

SelectWithLabel.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    //value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default SelectWithLabel;
