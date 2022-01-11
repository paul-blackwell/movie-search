import React from 'react';
import { FiStar } from 'react-icons/fi';
import PropTypes from 'prop-types';
import styles from './movie-score.module.scss';

const MovieScore = ({ className, score }) => (
  <div className={`${className} ${styles['movie-score']}`}>
    <FiStar className={styles['movie-score__icon']} />
    {score}
  </div>
);

MovieScore.propTypes = {
  className: PropTypes.string,
  score: PropTypes.string.isRequired,
};

MovieScore.defaultProps = {
  className: '',
};
export default MovieScore;
