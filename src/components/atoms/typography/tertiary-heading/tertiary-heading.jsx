import React from 'react';
import PropTypes from 'prop-types';
import styles from './tertiary-heading.module.scss';

const TertiaryHeading = ({ className, children }) => (
  <h1 className={`${className} ${styles['tertiary-heading']}`}>{children}</h1>
);

TertiaryHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TertiaryHeading.defaultProps = {
  className: '',
};

export default TertiaryHeading;
