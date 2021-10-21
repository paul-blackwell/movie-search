import React from "react";
import { FiMenu } from "react-icons/fi";
import styles from "../navbar/navbar.module.scss";
import Logo from "../../molecules/logo/logo";
import Nav from "../../molecules/nav/nav";

const Navbar = () => {
 
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar__top-container"]}>
        <Logo />
        <FiMenu className={styles["navbar__menu-icon"]} onClick={() => console.log('I was clicked')} />
      </div>
      <div className={`${styles["navbar__bottom-container"]}`}>
        <Nav />
      </div>
    </div>
  );
};

export default Navbar;
