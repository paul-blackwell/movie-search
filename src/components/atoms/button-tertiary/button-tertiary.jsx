import React from 'react';
import PropTypes from 'prop-types';
import styles from './button-tertiary.module.scss';

const ButtonTertiary = ({ className, children, handleClick }) => (
  <button type="button" onClick={handleClick} className={`${className} ${styles['button-tertiary']}`}>{children}</button>
);

ButtonTertiary.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

ButtonTertiary.defaultProps = {
  className: '',
};

export default ButtonTertiary;
