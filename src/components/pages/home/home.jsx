import React from 'react';
import defaultMovies from '../../../data/default-movies';
import Hero from '../../organisms/hero/hero';
import styles from './home.module.scss';

console.log(defaultMovies);

const Home = () => (
  <div className={styles.home}>
    <Hero className={styles.home__hero} />
  </div>
);

export default Home;
