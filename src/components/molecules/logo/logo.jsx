/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './logo.module.scss';

const Logo = () => (
  <a href="#" className={styles.logo}>
    <img src="/images/logos/movie-search-logo.svg" alt="MovieSearch logo" className={styles.logo__image} />
    <h4 className={styles.logo__text}>MovieSearch</h4>
  </a>
);

export default Logo;
