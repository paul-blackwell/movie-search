import React from 'react';
import PropTypes from 'prop-types';
import {
  FiInfo, FiCheck, FiX, FiAlertOctagon,
} from 'react-icons/fi';
import styles from './toast.module.scss';

const Toast = ({
  className, error, success, message,
}) => {
  const handleClick = () => {

  };

  if (error) {
    return (
      <div className={`${className} ${styles.toast} ${styles['toast--error']}`}>
        <div className={styles.toast__container}>
          <FiCheck className={styles.toast__icon} />
          <p className={styles.toast__para}>{message}</p>
          <button type="button">
            <FiX className={styles.toast__icon} />
          </button>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className={`${className} ${styles.toast} ${styles['toast--success']}`}>
        <div className={styles.toast__container}>
          <FiCheck className={styles.toast__icon} />
          <p className={styles.toast__para}>{message}</p>
          <button type="button">
            <FiX className={styles.toast__icon} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} ${styles.toast}`}>
      <div className={styles.toast__container}>
        <FiInfo className={styles.toast__icon} />
        <p className={styles.toast__para}>{message}</p>
        <button type="button" className={styles.toast__button}>
          <FiX className={styles.toast__icon} />
        </button>
      </div>
    </div>
  );
};

Toast.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  message: PropTypes.string,
};

Toast.defaultProps = {
  className: '',
  error: false,
  success: false,
  message: 'Add a toast massage as a prop',
};

export default Toast;
