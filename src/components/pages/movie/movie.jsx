import React from 'react';
import styles from './movie.module.scss';
import ButtonBack from '../../atoms/button-back/button-back';

const Movie = () => (
  <div className={styles.movie}>
    <ButtonBack to="/">Back</ButtonBack>
  </div>
);

export default Movie;
