import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styles from './layout.module.scss';
import Header from '../../organisms/header/header';
import Search from '../../organisms/search/search';
import Nav from '../../organisms/nav/nav';
import Toast from '../../molecules/toast/toast';

const Layout = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [toastState, setToastState] = useState('');

  const toastStore = useSelector((state) => state.toast);
  useEffect(() => {
    setToastState(toastStore.toast);
  }, [toastStore]);

  // This will hide the toast after 2 seconds if its showing
  const dispatch = useDispatch();
  useEffect(() => {
    let timer;
    if (toastStore.toast.display) {
      timer = setTimeout(() => {
        dispatch({ type: 'HIDE_TOAST', payload: toastStore.toast });
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [toastStore]);

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
      <Toast
        show={toastState.display}
        hide={toastState.display}
        message={toastState.message}
        error={toastState.type === 'error'}
        success={toastState.type === 'success'}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
