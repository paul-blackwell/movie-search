import React from "react";
import { FiMenu } from "react-icons/fi";
import styles from "../navbar/navbar.module.scss";
import Logo from "../../molecules/logo/logo";
import Nav from "../../molecules/nav/nav";
import Search from "../../molecules/search/search";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar__top-container"]}>
        <Logo />
        <div className={styles["navbar__menu-icon-container"]}>
          <FiMenu className={styles["navbar__menu-icon"]} />
        </div>
      </div>
      {/* <div className={`${styles["navbar__bottom-container"]} ${styles["navbar__bottom-container--hide"]}`}>
        <Nav />
      </div> */}
      <Search />
      <Nav />
    </div>
  );
};

export default Navbar;
