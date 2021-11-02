/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { FiCompass, FiHeart } from "react-icons/fi";
import styles from "../nav/nav.module.scss";
import CallToAction from "../../molecules/call-to-action/call-to-action";

const Nav = ({ className }) => {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul className={styles["nav__list"]}>
        <li className={styles["nav__item"]}>
          <a className={styles["nav__link--active"]} href="#">
            <FiCompass className={styles["nav__icon"]} />
            Browse
          </a>
        </li>
        <li className={styles["nav__item"]}>
          <a className={styles["nav__link"]} href="#">
            <FiHeart className={styles["nav__icon"]} />
            Favorites
          </a>
        </li>
      </ul>
      <CallToAction />
    </nav>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};

Nav.defaultProps = {
  className: "",
};

export default Nav;
