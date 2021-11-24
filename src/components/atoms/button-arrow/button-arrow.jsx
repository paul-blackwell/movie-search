import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import PropTypes from 'prop-types';
import styles from './button-arrow.module.scss';

const ButtonArrow = ({
  className, handleClick, disabled, right, text,
}) => (
  <button
    type="button"
    onClick={() => { if (!disabled) handleClick(); }}
    className={`${className} ${styles['button-arrow']} ${disabled ? styles['button-arrow--disabled'] : ''} ${right ? styles['button-arrow--right'] : styles['button-arrow--left']}`}
  >

    {right
      ? (
        <>
          {text && (<span className={`${styles['button-arrow__span']} ${styles['button-arrow__span--right']}`}>{text}</span>)}
          <FiChevronRight className={styles['button-arrow__icon']} />
        </>
      )
      : (
        <>
          <FiChevronLeft className={styles['button-arrow__icon']} />
          {text && (<span className={`${styles['button-arrow__span']} ${styles['button-arrow__span--left']}`}>{text}</span>)}
        </>
      )}
  </button>
);

ButtonArrow.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  right: PropTypes.bool,
  text: PropTypes.string,
};

ButtonArrow.defaultProps = {
  className: '',
  disabled: false,
  right: false,
  text: '',
};

export default ButtonArrow;
