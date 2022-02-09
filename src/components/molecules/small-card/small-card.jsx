import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './small-card.module.scss';

const SmallCard = ({ className, movie }) => {
  const {
    Title, Poster, Genre, Ratings, imdbID,
  } = movie;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: 'SET_CURRENTLY_SELECTED_MOVIE', payload: movie });
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div onClick={handleClick} className={`${className}, ${styles['small-card']}`}>
      I am a small card
    </div>
  );
};

SmallCard.propTypes = {
  className: PropTypes.string,
  movie: PropTypes.object.isRequired,
};

SmallCard.defaultProps = {
  className: '',
};

export default SmallCard;
