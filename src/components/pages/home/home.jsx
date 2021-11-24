import React from 'react';
import defaultMovies from '../../../data/default-movies';
import HeroSection from '../../organisms/hero-section/hero-section';
import PopularSection from '../../organisms/popular-section/popular-section';
import styles from './home.module.scss';

console.log(defaultMovies);

const Home = () => (
  <div className={styles.home}>
    <HeroSection className={styles.home__hero} />
    <PopularSection />
  </div>
);

export default Home;
