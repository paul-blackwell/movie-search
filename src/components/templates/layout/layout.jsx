import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';
import Header from '../../organisms/header/header';
import Search from '../../organisms/search/search';
import Nav from '../../organisms/nav/nav';
import Toast from '../../molecules/toast/toast';

const Layout = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className={styles.layout}>
      <Header
        className={styles.layout__header}
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      <Search className={styles.layout__search} />
      <Nav className={styles.layout__nav} showMobileNav={showMobileNav} />
      <main className={styles.layout__main}>
        <div className={styles.layout__wrapper}>
          {children}
        </div>
      </main>
      <Toast />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
