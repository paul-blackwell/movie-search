import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiPlay } from 'react-icons/fi';
import styles from './hero-section.module.scss';
import getMovieScore from '../../../utils/getMovieScore';
import MovieScore from '../../atoms/movie-score/movie-score';
import PrimaryHeading from '../../atoms/typography/primary-heading/primary-heading';
import TertiaryHeading from '../../atoms/typography/tertiary-heading/tertiary-heading';
import ButtonPrimary from '../../atoms/button-primary/button-primary';
import HeroImage from '../../atoms/hero-image/hero-image';

const HeroSection = ({ movieObj, className }) => {
  const {
    Poster, Title, Genre, Ratings, imdbID,
  } = movieObj;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: 'SET_CURRENTLY_SELECTED_MOVIE', payload: movieObj });
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div onClick={handleClick} className={`${className} ${styles['hero-section']}`}>
      <div className={styles['hero-section__score-container']}>
        <MovieScore score={getMovieScore(Ratings)} />
      </div>
      <div className={styles['hero-section__image-container']}>
        <HeroImage
          src={Poster}
          alt={Title}
          innerShadow
        />
      </div>
      <div className={styles['hero-section__content']}>
        <PrimaryHeading className={styles['hero-section__title']}>{Title}</PrimaryHeading>
        <TertiaryHeading className={styles['hero-section__tertiary-title']}>{Genre}</TertiaryHeading>
        <ButtonPrimary className={styles['hero-section__button-primary']} icon={<FiPlay />}>
          Watch now
        </ButtonPrimary>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  movieObj: PropTypes.object.isRequired,
  className: PropTypes.string,
};

HeroSection.defaultProps = {
  className: '',
};

export default HeroSection;
