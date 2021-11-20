import React from 'react';
import { FiPlay } from 'react-icons/fi';
import styles from './hero.module.scss';
import MovieScore from '../../atoms/movie-score/movie-score';
import PrimaryHeading from '../../atoms/typography/primary-heading/primary-heading';
import TertiaryHeading from '../../atoms/typography/tertiary-heading/tertiary-heading';
import ButtonPrimary from '../../atoms/button-primary/button-primary';
import StandardImage from '../../atoms/standard-image/standard-image';

const Hero = () => (
  <div className={styles.hero}>
    <StandardImage
      alt="blade runner 2020"
      src={`${window.location.origin}/images/default-movies/blade-runner-2049.jpg`}
      innerShadow
    />
    <MovieScore score="95%" />
    <PrimaryHeading>Blade Runner</PrimaryHeading>
    <TertiaryHeading>Action, Sci-Fi, Thriller</TertiaryHeading>
    <ButtonPrimary icon={<FiPlay />}>
      Watch now
    </ButtonPrimary>
  </div>
);

export default Hero;
