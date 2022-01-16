import React from 'react';
import { FiPlay } from 'react-icons/fi';
import styles from './hero-section.module.scss';
import MovieScore from '../../atoms/movie-score/movie-score';
import PrimaryHeading from '../../atoms/typography/primary-heading/primary-heading';
import TertiaryHeading from '../../atoms/typography/tertiary-heading/tertiary-heading';
import ButtonPrimary from '../../atoms/button-primary/button-primary';
import HeroImage from '../../atoms/hero-image/hero-image';

const HeroSection = () => {
  const handleClick = () => {
    console.log('I was clicked');
  };

  return (
    <div onClick={handleClick} className={styles['hero-section']}>
      <div className={styles['hero-section__score-container']}>
        <MovieScore score="95%" />
      </div>
      <div className={styles['hero-section__image-container']}>
        <HeroImage
          alt="blade runner 2020"
          src={`${window.location.origin}/images/default-movies/blade-runner-2049.jpg`}
          innerShadow
        />
      </div>
      <div className={styles['hero-section__content']}>
        <PrimaryHeading className={styles['hero-section__title']}>Blade Runner</PrimaryHeading>
        <TertiaryHeading className={styles['hero-section__tertiary-title']}>Action, Sci-Fi, Thriller</TertiaryHeading>
        <ButtonPrimary className={styles['hero-section__button-primary']} icon={<FiPlay />}>
          Watch now
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default HeroSection;
