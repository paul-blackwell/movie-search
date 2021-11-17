import React from 'react';
import defaultMovies from '../../../data/default-movies';
import PrimaryHeading from '../../atoms/typography/primary-heading/primary-heading';
import TertiaryHeading from '../../atoms/typography/tertiary-heading/tertiary-heading';
// import styles from './home.module.scss';

console.log(defaultMovies);

const Home = () => (
  <div>
    <div>
      <PrimaryHeading>Blade Runner</PrimaryHeading>
      <TertiaryHeading>Action, Sci-Fi, Thriller</TertiaryHeading>
    </div>
  </div>
);

export default Home;
