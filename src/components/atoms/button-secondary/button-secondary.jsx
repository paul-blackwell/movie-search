import React from 'react';
import PropTypes from 'prop-types';
import styles from './button-secondary.module.scss';

const ButtonSecondary = ({ className, onClick, children }) => <button type="button" onClick={onClick} className={`${className} ${styles['button-secondary']}`}>{children}</button>;

ButtonSecondary.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

ButtonSecondary.defaultProps = {
  className: '',
};

export default ButtonSecondary;
