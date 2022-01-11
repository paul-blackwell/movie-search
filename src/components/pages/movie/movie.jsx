import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './movie.module.scss';
import ButtonBack from '../../atoms/button-back/button-back';
import StandardImage from '../../atoms/standard-image/standard-image';
import ButtonFavorites from '../../atoms/button-favorites/button-favorites';

const Movie = () => {
  // Check if there is a currentlySelectedMovie, if there isn't navigate to home page
  const movieObj = useSelector((state) => state.movies.currentlySelectedMovie);
  const navigate = useNavigate();
  useEffect(() => {
    if (movieObj === '') {
      navigate('/');
    }
  }, []);

  // TODO: Add to favorites
  const handleAddToFavorites = () => {
    console.log('I was added to favorites');
  };

  return (
    <div className={styles.movie}>
      <ButtonBack to="/">Back</ButtonBack>
      {movieObj !== '' && (
      <div className={styles['movie__image-container']}>
        <div className={styles['movie__button-favorites-container']}>
          <ButtonFavorites onClick={handleAddToFavorites} />
        </div>
        <StandardImage src={movieObj.Poster} alt={movieObj.Title} />
      </div>
      )}
    </div>
  );
};

export default Movie;
