import React from 'react';
// import { FiPlay } from 'react-icons/fi';
import defaultMovies from '../../../data/default-movies';
import PrimaryHeading from '../../atoms/typography/primary-heading/primary-heading';
import TertiaryHeading from '../../atoms/typography/tertiary-heading/tertiary-heading';
// import ButtonPrimary from '../../atoms/button-primary/button-primary';
// import styles from './home.module.scss';

console.log(defaultMovies);

const Home = () => (
  <div>
    <div>
      <PrimaryHeading>Blade Runner</PrimaryHeading>
      <TertiaryHeading>Action, Sci-Fi, Thriller</TertiaryHeading>
      {/* <ButtonPrimary>
        <FiPlay />
        Watch now
      </ButtonPrimary> */}
    </div>
  </div>
);

export default Home;
