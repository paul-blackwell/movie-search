import React from 'react';
import PropTypes from 'prop-types';
import { FiHeart } from 'react-icons/fi';
import styles from './button-favorites.module.scss';

const ButtonFavorites = ({ className, onClick, active }) => (
  <button onClick={onClick} type="button" className={`${className} ${styles['button-favorites']} ${active ? styles['button-favorites--active'] : ''}`}>
    <FiHeart className={styles['button-favorites__icon']} />
  </button>
);

ButtonFavorites.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

ButtonFavorites.defaultProps = {
  className: '',
  active: false,
};

export default ButtonFavorites;
