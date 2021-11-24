import React from 'react';
import defaultMovies from '../../../data/default-movies';
import Hero from '../../organisms/hero/hero';
import Popular from '../../organisms/popular/popular';
import styles from './home.module.scss';

console.log(defaultMovies);

const Home = () => (
  <div className={styles.home}>
    <Hero className={styles.home__hero} />
    <Popular />
  </div>
);

export default Home;
