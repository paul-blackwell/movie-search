import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../molecules/logo/logo";
import styles from "../navbar/navbar.module.scss";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles['navbar__top-container']}>
        <Logo />
        <FiMenu className={styles['navbar__menu-icon']} />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
