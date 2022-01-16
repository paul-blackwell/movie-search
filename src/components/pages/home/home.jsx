import React from 'react';
import defaultMovies from '../../../data/default-movies';
import HeroSection from '../../organisms/hero-section/hero-section';
import PopularSection from '../../organisms/popular-section/popular-section';
import styles from './home.module.scss';

const Home = () => (
  <div className={styles.home}>
    <HeroSection className={styles.home__hero} movieObj={defaultMovies.hero} />
    <PopularSection movies={defaultMovies} />
  </div>
);

export default Home;
