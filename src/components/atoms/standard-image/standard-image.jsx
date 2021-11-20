import React from 'react';
import PropTypes from 'prop-types';
import styles from './standard-image.module.scss';

const StandardImage = ({ src, alt, innerShadow }) => (
  <img
    className={`${styles['standard-image']} ${innerShadow ? styles['standard-image--inner-shadow'] : ''}`}
    src={src}
    alt={alt}
  />
);

StandardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  innerShadow: PropTypes.bool,
};

StandardImage.defaultProps = {
  innerShadow: false,
};

export default StandardImage;
