import React from 'react';
import PropTypes from 'prop-types';
import { FiCompass, FiHeart, FiHome } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.scss';
import CallToAction from '../../molecules/call-to-action/call-to-action';

const Nav = ({ className, showMobileNav }) => (
  <nav className={`${styles.nav} ${className} ${showMobileNav ? styles['nav--show'] : ''}`}>
    <ul className={styles.nav__list}>
      <li className={styles.nav__item}>
        <NavLink className={({ isActive }) => (isActive ? styles['nav__link--active'] : styles.nav__link)} to="/">
          <FiHome className={styles.nav__icon} />
          Home
        </NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink className={({ isActive }) => (isActive ? styles['nav__link--active'] : styles.nav__link)} to="search-results">
          <FiCompass className={styles.nav__icon} />
          Browse
        </NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink className={({ isActive }) => (isActive ? styles['nav__link--active'] : styles.nav__link)} to="favorites">
          <FiHeart className={styles.nav__icon} />
          Favorites
        </NavLink>
      </li>
    </ul>
    <CallToAction />
  </nav>
);

Nav.propTypes = {
  className: PropTypes.string,
  showMobileNav: PropTypes.bool.isRequired,
};

Nav.defaultProps = {
  className: '',
};

export default Nav;
