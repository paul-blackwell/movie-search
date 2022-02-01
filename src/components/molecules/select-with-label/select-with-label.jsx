import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import styles from './select-with-label.module.scss';
import Select from '../../atoms/select/select';

const SelectWithLabel = ({
  className,
  label,
  options,
  value,
  onChange,
}) => {
  const selectId = uuid();

  return (
    <div className={`${className} ${styles['select-with-label']}`}>
      <label htmlFor={selectId} className={styles['select-with-label__label']}>{label}</label>
      <Select id={selectId} value={value} onChange={onChange} options={options} />
    </div>
  );
};

SelectWithLabel.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.node).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectWithLabel.defaultProps = {
  className: '',
};

export default SelectWithLabel;
