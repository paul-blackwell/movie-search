/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FiCompass } from "react-icons/fi";
import styles from "../nav/nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__list"]}>
        <li className={styles["nav__item"]}>
          <a className={styles["nav__link"]} href="#">
            <FiCompass className={styles["nav__icon"]} />
            Browse
          </a>
        </li>
        <li className={styles["nav__item"]}>
          <a className={styles["nav__link"]} href="#">
            <FiCompass className={styles["nav__icon"]} />
            Browse
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
