import React from 'react';
import PropTypes from 'prop-types';
import styles from './popular-section.module.scss';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';
import PaginationButtons from '../../molecules/pagination-buttons/pagination-buttons';
import Card from '../../molecules/card/card';
import useWindowDimensions from '../../../hooks/use-window-dimensions';

const PopularSection = ({ className, movies }) => {
  // This will give us the width of the viewport every time the window size changes
  const { width } = useWindowDimensions();
  console.log(width);

  return (
    <section className={`${styles['popular-section']} ${className}`}>
      <div className={styles['popular-section__title']}>
        <SecondaryHeading className={styles['popular-section__secondary-heading']}>Popular on MovieSearch</SecondaryHeading>
        <div className={styles['popular-section__pagination-buttons']}>
          <PaginationButtons />
        </div>
      </div>
      <div className={styles['popular-section__cards']}>
        <Card movie={movies.popular[0]} />
        <Card movie={movies.popular[1]} />
        <Card movie={movies.popular[2]} />
        <Card movie={movies.popular[3]} />
      </div>
    </section>
  );
};

PopularSection.propTypes = {
  className: PropTypes.string,
  movies: PropTypes.arrayOf.isRequired,
};

PopularSection.defaultProps = {
  className: '',
};

export default PopularSection;
