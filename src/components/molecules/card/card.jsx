/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites } from '../../../reducers/favoritesSlice';
import styles from './card.module.scss';
import getMovieScore from '../../../utils/getMovieScore';
import StandardImage from '../../atoms/standard-image/standard-image';
import MovieScore from '../../atoms/movie-score/movie-score';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';
import Paragraph from '../../atoms/typography/paragraph/paragraph';
import truncate from '../../../utils/truncate';

const Card = ({ className, movie }) => {
  const {
    Title, Poster, Genre, Ratings,
  } = movie;

  // Just for testing will be remove in the future (unit-3)
  // Get global favorites state
  const favorites = useSelector((state) => state.favorites.value);
  console.log(favorites);

  // This will add the movie to the favorites global state when the card is clicked
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToFavorites(movie));
  };

  return (
    <div onClick={handleClick} className={`${className} ${styles.card}`}>
      <div className={styles['card__image-container']}>
        <StandardImage src={Poster} alt={Title} />
      </div>
      <MovieScore score={getMovieScore(Ratings)} />
      <SecondaryHeading>{truncate(Title, 20)}</SecondaryHeading>
      <Paragraph>{Genre}</Paragraph>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  movie: PropTypes.shape.isRequired,
};

Card.defaultProps = {
  className: '',
};

export default Card;
