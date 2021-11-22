import React from 'react';
import PropTypes from 'prop-types';
import styles from './button-primary.module.scss';

const ButtonPrimary = ({ children, handleClick, icon }) => (
  <button
    type="button"
    onClick={handleClick}
    className={styles['button-primary']}
  >
    {icon}
    {children}
  </button>
);

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

ButtonPrimary.defaultProps = {
  icon: '',
};

export default ButtonPrimary;
