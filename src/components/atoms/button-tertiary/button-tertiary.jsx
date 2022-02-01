import React from 'react';
import PropTypes from 'prop-types';
import styles from './button-tertiary.module.scss';

const ButtonTertiary = ({ className, children, onClick }) => (
  <button type="button" onClick={onClick} className={`${className} ${styles['button-tertiary']}`}>{children}</button>
);

ButtonTertiary.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

ButtonTertiary.defaultProps = {
  className: '',
};

export default ButtonTertiary;
