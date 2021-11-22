import React from 'react';
import PropTypes from 'prop-types';
import styles from './hero-image.module.scss';

const HeroImage = ({
  className, src, alt, innerShadow,
}) => (
  <img
    className={`${className} ${styles['hero-image']} ${innerShadow ? styles['hero-image--inner-shadow'] : ''}`}
    src={src}
    alt={alt}
  />
);

HeroImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  innerShadow: PropTypes.bool,
};

HeroImage.defaultProps = {
  className: '',
  innerShadow: false,
};

export default HeroImage;
