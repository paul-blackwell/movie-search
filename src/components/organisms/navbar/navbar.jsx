import React, { useState } from "react";
import Logo from "../../molecules/logo/logo";
import styles from "../navbar/navbar.module.scss";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__container}>
        <Logo />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
