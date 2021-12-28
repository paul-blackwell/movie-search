/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../../reducers/favoritesSlice';
import styles from './card.module.scss';
import StandardImage from '../../atoms/standard-image/standard-image';
import MovieScore from '../../atoms/movie-score/movie-score';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';
import Paragraph from '../../atoms/typography/paragraph/paragraph';
import truncate from '../../../utils/truncate';

const Card = ({ className, movie }) => {
  const {
    Title, Poster, Genre, Ratings,
  } = movie;

  const getMovieScore = () => {
    const rottenTomatoes = Ratings.find((rating) => rating.Source === 'Rotten Tomatoes');
    if (rottenTomatoes) return rottenTomatoes.Value;

    const metacritic = Ratings.find((rating) => rating.Source === 'Metacritic');
    if (metacritic) return metacritic.Value;

    const internetMovieDatabase = Ratings.find((rating) => rating.Source === 'Internet Movie Database');
    if (internetMovieDatabase) return internetMovieDatabase.Value;

    return 'No score found';
  };

  // Just for testing (unit-3)
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToFavorites(movie));
  };

  return (
    <div onClick={handleClick} className={`${className} ${styles.card}`}>
      <div className={styles['card__image-container']}>
        <StandardImage src={Poster} alt={Title} />
      </div>
      <MovieScore score={getMovieScore()} />
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
