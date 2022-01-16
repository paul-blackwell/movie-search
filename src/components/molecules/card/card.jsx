import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './card.module.scss';
import getMovieScore from '../../../utils/getMovieScore';
import StandardImage from '../../atoms/standard-image/standard-image';
import MovieScore from '../../atoms/movie-score/movie-score';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';
import Paragraph from '../../atoms/typography/paragraph/paragraph';
import truncate from '../../../utils/truncate';

const Card = ({ className, movie }) => {
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
