import React from 'react';
import { FiPlay } from 'react-icons/fi';
import styles from './hero.module.scss';
import PrimaryHeading from '../../atoms/typography/primary-heading/primary-heading';
import TertiaryHeading from '../../atoms/typography/tertiary-heading/tertiary-heading';
import ButtonPrimary from '../../atoms/button-primary/button-primary';

const Hero = () => (
  <div className={styles.hero}>
    <PrimaryHeading>Blade Runner</PrimaryHeading>
    <TertiaryHeading>Action, Sci-Fi, Thriller</TertiaryHeading>
    <ButtonPrimary>
      <FiPlay />
      Watch now
    </ButtonPrimary>
  </div>
);

export default Hero;
