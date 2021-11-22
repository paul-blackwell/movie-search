import React from 'react';
import { FiStar } from 'react-icons/fi';
import PropTypes from 'prop-types';
import styles from './movie-score.module.scss';

const MovieScore = ({ score }) => (
  <div className={styles['movie-score']}>
    <FiStar className={styles['movie-score__icon']} />
    {score}
  </div>
);

MovieScore.propTypes = {
  score: PropTypes.string.isRequired,
};

export default MovieScore;
