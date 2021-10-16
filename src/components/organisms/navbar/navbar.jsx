import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import styles from "../navbar/navbar.module.scss";
import Logo from "../../molecules/logo/logo";
import Nav from "../../molecules/nav/nav";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleClick = () => {
    setOpenMobileMenu(!openMobileMenu)
  }

  return (
    <div className={styles.navbar}>
      <div className={styles["navbar__top-container"]}>
        <Logo />
        <FiMenu className={styles["navbar__menu-icon"]} onClick={handleClick} />
      </div>
      <div className={`${styles["navbar__bottom-container"]} ${openMobileMenu ? styles["navbar__bottom-container--show"] : styles["navbar__bottom-container--hide"]}`}>
        <Nav />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
