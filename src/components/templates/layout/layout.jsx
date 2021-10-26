import React from "react";
import PropTypes from "prop-types";
import styles from "../layout/layout.module.scss";
import Header from "../../molecules/header/header";
import Search from '../../molecules/search/search'
import Nav from "../../molecules/nav/nav";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header className={styles['layout__header']} />
    <Search className={styles['layout__search']} />
    <Nav className={styles['layout__nav']} />
    <main className={styles['layout__main']}>{children}</main>
  </div>
);

Layout.propTypes = {
 // children: PropTypes.node.isRequired,
};

export default Layout;
