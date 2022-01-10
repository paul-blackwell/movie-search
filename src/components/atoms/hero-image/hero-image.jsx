import React from 'react';
import PropTypes from 'prop-types';
import styles from './hero-image.module.scss';

const HeroImage = ({
  className, src, alt, innerShadow,
}) => (
  <div className={`${className} ${styles['hero-image']}`}>
    <img
      className={styles['hero-image__img']}
      src={src}
      alt={alt}
    />
    {innerShadow && (
      <div className={styles['hero-image__inner-shadow']} />
    )}
  </div>
);

HeroImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  innerShadow: PropTypes.bool,
};

HeroImage.defaultProps = {
  className: '',
  innerShadow: true,
};

export default HeroImage;
