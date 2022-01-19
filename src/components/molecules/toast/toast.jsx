import React from 'react';
import PropTypes from 'prop-types';
import {
  FiInfo, FiCheck, FiX, FiAlertOctagon,
} from 'react-icons/fi';
import styles from './toast.module.scss';

const Toast = ({ className, error, success }) => {
  const handleClick = () => {

  };

  if (error) {
    return (
      <div className={`${className} ${styles.toast} ${styles['toast--error']}`}>
        <div className={styles.toast__container}>
          <FiCheck className={styles.toast__icon} />
          <p className={styles.toast__para}>Added Blade Runner to your favorites.</p>
          <FiAlertOctagon className={styles.toast__icon} />
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className={`${className} ${styles.toast} ${styles['toast--success']}`}>
        <div className={styles.toast__container}>
          <FiCheck className={styles.toast__icon} />
          <p className={styles.toast__para}>Added Blade Runner to your favorites.</p>
          <FiX className={styles.toast__icon} />
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} ${styles.toast}`}>
      <div className={styles.toast__container}>
        <FiCheck className={styles.toast__icon} />
        <p className={styles.toast__para}>Added Blade Runner to your favorites.</p>
        <FiInfo className={styles.toast__icon} />
      </div>
    </div>
  );
};

Toast.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
};

Toast.defaultProps = {
  className: '',
  error: false,
  success: false,
};

export default Toast;
