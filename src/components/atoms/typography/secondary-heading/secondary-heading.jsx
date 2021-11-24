import React from 'react';
import PropTypes from 'prop-types';
import styles from './secondary-heading.module.scss';

const SecondaryHeading = ({ className, children }) => (
  <h2 className={`${className} ${styles['secondary-heading']}`}>{children}</h2>
);

SecondaryHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

SecondaryHeading.defaultProps = {
  className: '',
};

export default SecondaryHeading;
