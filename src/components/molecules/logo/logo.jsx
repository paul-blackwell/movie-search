import React from "react";
import styles from '../logo/logo.module.scss'

const Logo = () => (
    <div className={styles.logo}>
        <img src='/images/logos/movie-search-logo.svg' alt="MovieSearch logo" className={styles.logo__image}  />
        <h4 className={styles.logo__text}>MovieSearch</h4>
    </div>
);

export default Logo;