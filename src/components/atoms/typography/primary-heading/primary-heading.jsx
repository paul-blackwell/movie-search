import React from 'react';
import PropTypes from 'prop-types';
import styles from './primary-heading.module.scss';

const PrimaryHeading = ({ className, children }) => (
  <h1 className={`${className} ${styles['primary-heading']}`}>{children}</h1>
);

PrimaryHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PrimaryHeading.defaultProps = {
  className: '',
};

export default PrimaryHeading;
