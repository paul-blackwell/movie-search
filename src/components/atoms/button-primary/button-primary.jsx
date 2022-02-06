import React from 'react';
import PropTypes from 'prop-types';
import styles from './button-primary.module.scss';

const ButtonPrimary = ({
  className, type, children, onClick, icon, fullWidthOnMobile,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`${className} ${styles['button-primary']} ${fullWidthOnMobile ? styles['button-primary--full-width-on-mobile'] : ''}`}
  >
    {icon}
    {children}
  </button>
);

ButtonPrimary.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  fullWidthOnMobile: PropTypes.bool,
};

ButtonPrimary.defaultProps = {
  className: '',
  type: 'button',
  icon: '',
  fullWidthOnMobile: false,
};

export default ButtonPrimary;
