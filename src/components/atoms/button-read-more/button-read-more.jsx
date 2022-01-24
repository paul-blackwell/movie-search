import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from './button-read-more.module.scss';

const ButtonReadMore = ({ className, onClick, showLess }) => {
  if (showLess) {
    return (
      <button onClick={onClick} type="button" className={`${className} ${styles['button-read-more']}`}>
        <FiChevronUp className={styles['button-read-more__icon']} />
        Show less
      </button>
    );
  }

  return (
    <button onClick={onClick} type="button" className={`${className} ${styles['button-read-more']}`}>
      <FiChevronDown className={styles['button-read-more__icon']} />
      Show more
    </button>
  );
};

ButtonReadMore.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  showLess: PropTypes.bool,
};

ButtonReadMore.defaultProps = {
  className: '',
  showLess: false,
};

export default ButtonReadMore;
