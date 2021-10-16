/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FiCompass, FiHeart } from "react-icons/fi";
import styles from "../nav/nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
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
    </nav>
  );
};

export default Nav;
