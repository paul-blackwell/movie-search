import React from 'react';
import PropTypes from 'prop-types';
import styles from './button-primary.module.scss';

const ButtonPrimary = ({ children, handleClick, hasIcon }) => (
  <button
    type="button"
    onClick={handleClick}
    className={`${styles['button-primary']} ${hasIcon ? styles['button-primary--icon'] : ''}`}
  >
    {children}
  </button>
);

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  hasIcon: PropTypes.bool,
};

ButtonPrimary.defaultProps = {
  hasIcon: false,
};

export default ButtonPrimary;
