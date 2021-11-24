import React from 'react';
import PropTypes from 'prop-types';
import styles from './button-primary.module.scss';

const ButtonPrimary = ({
  className, children, handleClick, icon,
}) => (
  <button
    type="button"
    onClick={handleClick}
    className={`${className} ${styles['button-primary']}`}
  >
    {icon}
    {children}
  </button>
);

ButtonPrimary.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

ButtonPrimary.defaultProps = {
  className: '',
  icon: '',
};

export default ButtonPrimary;
