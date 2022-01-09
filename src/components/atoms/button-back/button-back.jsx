import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import styles from './button-back.module.scss';

const ButtonBack = ({ className, to, children }) => (
  <Link to={to} className={`${styles['button-back']} ${className}}`}>
    <FiArrowLeft className={styles['button-back__icon']} />
    {children}
  </Link>
);

ButtonBack.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

ButtonBack.defaultProps = {
  className: '',
};

export default ButtonBack;
