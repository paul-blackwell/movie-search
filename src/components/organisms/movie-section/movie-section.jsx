import React from 'react';
import PropTypes from 'prop-types';
import { FiPlay } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import styles from './movie-section.module.scss';
import getMovieScore from '../../../utils/getMovieScore';
import ButtonBack from '../../atoms/button-back/button-back';
import ButtonFavorites from '../../atoms/button-favorites/button-favorites';
import ButtonPrimary from '../../atoms/button-primary/button-primary';
import StandardImage from '../../atoms/standard-image/standard-image';
import MovieScore from '../../atoms/movie-score/movie-score';
import PrimaryHeading from '../../atoms/typography/primary-heading/primary-heading';
import Paragraph from '../../atoms/typography/paragraph/paragraph';
import DropdownParagraph from '../../molecules/dropdown-paragraph/dropdown-paragraph';

const MovieSection = ({ className, movieObj, withDropDown }) => {
  const {
    Poster, Title, Genre, Plot, Ratings, imdbID,
  } = movieObj;

  // Get global favorites state
  const favorites = useSelector((state) => state.favorites.value);
  const movieIsInFavorites = favorites.find((item) => item.imdbID === imdbID);

  // This will add the movie to the favorites global state
  const dispatch = useDispatch();
  const handleAddToFavorites = () => {
    if (!movieIsInFavorites) {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: movieObj });

      // Show success toast
      dispatch({
        type: 'SHOW_TOAST',
        payload: {
          display: true,
          message: `Added ${Title} to your favorites. `,
          type: 'success',
        },
      });
    }
  };

  // TODO: Remove from favorites
  // const handleRemoveFromFavorites = () => {
  //   console.log('I was removed from favorites');
  // };

  return (
    <div className={styles['movie-section']}>
      <ButtonBack to="/">
        Back
      </ButtonBack>
      <div className={`${className} ${styles['movie-section__container']}`}>
        <div className={styles['movie-section__image-container']}>
          {!withDropDown && (
          <div className={styles['movie-section__button-favorites-container']}>
            <ButtonFavorites
              onClick={handleAddToFavorites}
              alreadySelected={movieIsInFavorites}
            />
          </div>
          )}
          <StandardImage src={Poster} alt={Title} />
        </div>
        <div className={styles['movie-section__content']}>
          <PrimaryHeading>{Title}</PrimaryHeading>
          <div className={styles['movie-section__genre-container']}>
            <Paragraph>{Genre}</Paragraph>
            <MovieScore className={styles['movie-section__score']} score={getMovieScore(Ratings)} />
          </div>
          {withDropDown
            ? <DropdownParagraph>{Plot}</DropdownParagraph>
            : (

              <div className={styles['movie-section__para-container']}>
                <Paragraph>{Plot}</Paragraph>
              </div>
            )}
          <ButtonPrimary
            icon={<FiPlay className={styles['movie-section__button-icon']} />}
            onClick={() => console.log('Watch now was clicked')}
            fullWidthOnMobile
          >
            Watch now
          </ButtonPrimary>
        </div>
      </div>
      <div className={styles['movie-section__divider']} />
    </div>
  );
};

MovieSection.propTypes = {
  movieObj: PropTypes.object.isRequired,
  className: PropTypes.string,
  withDropDown: PropTypes.bool,
};

MovieSection.defaultProps = {
  className: '',
  withDropDown: false,
};

export default MovieSection;
