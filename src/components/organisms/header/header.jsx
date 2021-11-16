/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './header.module.scss';
import Logo from '../../molecules/logo/logo';

const Header = ({ className, showMobileNav, setShowMobileNav }) => {
  const handleClick = () => setShowMobileNav(!showMobileNav);
  return (
    <div className={`${styles.header} ${className}`}>
      <div className={styles['header__top-container']}>
        <Logo />
        <div onClick={handleClick} className={styles['header__menu-icon-container']}>
          {showMobileNav
            ? <FiX className={styles['header__menu-icon']} />
            : <FiMenu className={styles['header__menu-icon']} />}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  showMobileNav: PropTypes.bool.isRequired,
  setShowMobileNav: PropTypes.func.isRequired,
};

Header.defaultProps = {
  className: '',
};

export default Header;
