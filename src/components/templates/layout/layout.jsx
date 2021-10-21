import React from "react";
import PropTypes from "prop-types";
import styles from "../layout/layout.module.scss";
import Navbar from "../../organisms/navbar/navbar";
import Search from "../../organisms/search/search";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Navbar />
    <Search />
    <main className={styles['layout__main']}>{children}</main>
  </div>
);

Layout.propTypes = {
 // children: PropTypes.node.isRequired,
};

export default Layout;
