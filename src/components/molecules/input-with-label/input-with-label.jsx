import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import styles from './input-with-label.module.scss';
import Input from '../../atoms/input/input';

const InputWithLabel = ({
  className,
  children,
  type,
  value,
  placeholder,
  handleChange,
}) => {
  const inputId = uuid();

  return (
    <div className={`${className} ${styles['input-with-label']}`}>
      <label htmlFor={inputId} className={styles['input-with-label__label']}>{children}</label>
      <Input
        id={inputId}
        type={type}
        value={value}
        placeholder={placeholder}
        handleChange={handleChange}
      />
    </div>
  );
};

InputWithLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

InputWithLabel.defaultProps = {
  className: '',
  placeholder: '',
  value: '',
};

export default InputWithLabel;
