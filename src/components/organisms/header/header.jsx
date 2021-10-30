import React from "react";
import PropTypes from "prop-types";
import { FiMenu } from "react-icons/fi";
import styles from "../header/header.module.scss";
import Logo from "../../molecules/logo/logo";

const Header = ({className}) => {
  return (
    <div className={`${styles.header} ${className}`}>
      <div className={styles["header__top-container"]}>
        <Logo />
        <div className={styles["header__menu-icon-container"]}>
          <FiMenu className={styles["header__menu-icon"]} />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};


Header.defaultProps = {
  className: '',
};

export default Header;
