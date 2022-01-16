import React from 'react';
import PropTypes from 'prop-types';
import { FiHeart, FiX } from 'react-icons/fi';
import styles from './button-favorites.module.scss';

const ButtonFavorites = ({
  className, onClick, alreadySelected, removeFavorite,
}) => {
  if (removeFavorite) {
    return (
      <button onClick={onClick} type="button" className={`${className} ${styles['button-favorites']} ${styles['button-favorites--remove']}`}>
        <FiX className={styles['button-favorites__icon']} />
      </button>
    );
  }
  return (
    <button onClick={onClick} type="button" className={`${className} ${styles['button-favorites']} ${alreadySelected ? styles['button-favorites--alreadySelected'] : ''}`}>
      <FiHeart className={styles['button-favorites__icon']} />
    </button>
  );
};

ButtonFavorites.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  alreadySelected: PropTypes.bool,
  removeFavorite: PropTypes.bool,
};

ButtonFavorites.defaultProps = {
  className: '',
  alreadySelected: false,
  removeFavorite: false,
};

export default ButtonFavorites;
