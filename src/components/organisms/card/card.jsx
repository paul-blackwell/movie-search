import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';
import StandardImage from '../../atoms/standard-image/standard-image';
// import MovieScore from '../../atoms/movie-score/movie-score';
// import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';

const Card = ({ className, movie }) => {
  const { Title, Poster } = movie;

  return (
    <div className={`${className} ${styles.card}`}>
      <StandardImage src={Poster} alt={Title} />
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
