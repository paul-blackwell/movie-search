import React from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import styles from './toast.module.scss';

const Toast = () => {
  const handleClick = () => {

  };

  return (
    <div className={styles.toast}>
      <div className={styles.toast__container}>
        <FiCheck className={styles.toast__icon} />
        <p className={styles.toast__para}>Added Blade Runner to your favorites.</p>
        <FiX className={styles.toast__icon} />
      </div>
    </div>
  );
};

export default Toast;
