import React from 'react';
import PropTypes from 'prop-types';
import styles from './standard-image.module.scss';

const StandardImage = ({
  className, src, alt, innerShadow,
}) => (
  <img
    className={`${className} ${styles['standard-image']} ${innerShadow ? styles['standard-image--inner-shadow'] : ''}`}
    src={src}
    alt={alt}
  />
);

StandardImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  innerShadow: PropTypes.bool,
};

StandardImage.defaultProps = {
  className: '',
  innerShadow: false,
};

export default StandardImage;
