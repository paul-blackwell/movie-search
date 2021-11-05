import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';
import Header from '../../organisms/header/header';
import Search from '../../organisms/search/search';
import Nav from '../../organisms/nav/nav';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header className={styles.layout__header} />
    <Search className={styles.layout__search} />
    <Nav className={styles.layout__nav} />
    <main className={styles.layout__main}>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
