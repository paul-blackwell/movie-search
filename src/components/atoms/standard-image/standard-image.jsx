import React from 'react';
import PropTypes from 'prop-types';
import styles from './standard-image.module.scss';

const StandardImage = ({
  className, src, alt, innerShadow,
}) => (
  <div className={styles['standard-image']}>
    <img
      className={`${className} ${styles['standard-image__img']}`}
      src={src}
      alt={alt}
    />
    {innerShadow && (
      <div className={styles['standard-image__inner-shadow']} />
    )}
  </div>
);

StandardImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  innerShadow: PropTypes.bool,
};

StandardImage.defaultProps = {
  className: '',
  innerShadow: true,
};

export default StandardImage;
