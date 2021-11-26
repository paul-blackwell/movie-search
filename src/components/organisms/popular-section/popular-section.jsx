import React from 'react';
import PropTypes from 'prop-types';
import styles from './popular-section.module.scss';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';
import PaginationButtons from '../../molecules/pagination-buttons/pagination-buttons';
import Card from '../../molecules/card/card';

const PopularSection = ({ className, movies }) => (
  <section className={`${styles['popular-section']} ${className}`}>
    <div className={styles['popular-section__title']}>
      <SecondaryHeading className={styles['popular-section__secondary-heading']}>Popular on MovieSearch</SecondaryHeading>
      <PaginationButtons />
    </div>
    <Card movie={movies.popular[0]} />
  </section>
);

PopularSection.propTypes = {
  className: PropTypes.string,
  movies: PropTypes.arrayOf.isRequired,
};

PopularSection.defaultProps = {
  className: '',
};

export default PopularSection;