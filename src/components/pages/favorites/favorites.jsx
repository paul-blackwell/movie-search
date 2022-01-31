import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './favorites.module.scss';
import ButtonBack from '../../atoms/button-back/button-back';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';
import MovieSection from '../../organisms/movie-section/movie-section';

const Favorites = () => {
  // Get Favorites from store
  const favorites = useSelector((state) => state.favorites.value);

  // If there are no movies in the favorites store show error toast
  const dispatch = useDispatch();
  if (favorites.length < 1) {
    dispatch({
      type: 'SHOW_TOAST',
      payload: {
        display: true,
        message: 'You currently have to favorites saved',
        type: 'error',
      },
    });
  }

  // If there are no movies in the favorites store
  if (favorites.length < 1) {
    return (
      <div className={styles.favorites}>
        <ButtonBack to="/">
          Back
        </ButtonBack>
        <SecondaryHeading>You currently have no favorites saved</SecondaryHeading>
      </div>
    );
  }

  // If there are movies in the favorites store
  return (
    <div className={styles.favorites}>
      {favorites.map((favorite, index) => (
        <MovieSection
          key={favorite.imdbID}
          movieObj={favorite}
          dropDown
          removeFromFavoritesBtn
          showBackBtn={index === 0}
          divider
        />
      ))}
    </div>
  );
};

export default Favorites;
