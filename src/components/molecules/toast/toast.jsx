import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  FiInfo, FiCheck, FiX, FiAlertOctagon,
} from 'react-icons/fi';
import styles from './toast.module.scss';

const Toast = ({
  className,
  error,
  success,
  message,
  show,
  hide,
}) => {
  const toastStore = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: 'HIDE_TOAST', payload: toastStore.toast });
  };

  const showOrHideToast = () => {
    if (show) return `${styles['toast--show']}`;
    if (!hide && hide !== null) return `${styles['toast--hide']}`;

    return '';
  };

  if (error) {
    return (
      <div className={`${className} ${styles.toast} ${styles['toast--error']} ${showOrHideToast()}`}>
        <div className={styles.toast__container}>
          <FiAlertOctagon className={styles.toast__icon} />
          <p className={styles.toast__para}>{message}</p>
          <button
            type="button"
            className={styles.toast__button}
            onClick={handleClick}
          >
            <FiX className={styles.toast__icon} />
          </button>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className={`${className} ${styles.toast} ${styles['toast--success']} ${showOrHideToast()}`}>
        <div className={styles.toast__container}>
          <FiCheck className={styles.toast__icon} />
          <p className={styles.toast__para}>{message}</p>
          <button
            type="button"
            className={styles.toast__button}
            onClick={handleClick}
          >
            <FiX className={styles.toast__icon} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} ${styles.toast} ${showOrHideToast()}`}>
      <div className={styles.toast__container}>
        <FiInfo className={styles.toast__icon} />
        <p className={styles.toast__para}>{message}</p>
        <button
          type="button"
          className={styles.toast__button}
          onClick={handleClick}
        >
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
  show: PropTypes.bool,
  hide: PropTypes.bool,
  message: PropTypes.string,
};

Toast.defaultProps = {
  className: '',
  error: false,
  success: false,
  show: false,
  hide: false,
  message: 'Add a toast massage as a prop',
};

export default Toast;
