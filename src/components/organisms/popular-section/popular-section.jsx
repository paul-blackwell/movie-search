import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './popular-section.module.scss';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';
import PaginationButtons from '../../molecules/pagination-buttons/pagination-buttons';
import Card from '../../molecules/card/card';
// import useWindowDimensions from '../../../hooks/use-window-dimensions';

const PopularSection = ({ className, movies }) => {
  // This will give us the width of the viewport every time the window size changes
  // const { width } = useWindowDimensions();
  let popular = [...movies.popular];
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  const [paginatedMovies, setPaginatedMovies] = useState(popular.splice(startIndex, endIndex));

  // let cardsToShow = movies.popular.length;
  // if (width > 768) {
  //   cardsToShow = 2;
  // }
  // if (width > 1040) {
  //   cardsToShow = 3;
  // }
  // if (width > 1280) {
  //   cardsToShow = 4;
  // }

  const next = () => {
    if (endIndex < movies.popular.length) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };

  const previous = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };

  useEffect(() => {
    popular = [...movies.popular];
    setPaginatedMovies(popular.splice(startIndex, endIndex));
  }, [startIndex, endIndex]);

  return (
    <section className={`${styles['popular-section']} ${className}`}>
      <div className={styles['popular-section__title']}>
        <SecondaryHeading className={styles['popular-section__secondary-heading']}>Popular on MovieSearch</SecondaryHeading>
        <div className={styles['popular-section__pagination-buttons']}>
          <PaginationButtons
            next={next}
            previous={previous}
            disableLeft={startIndex === 0}
            disableRight={endIndex === movies.popular.length}
          />
        </div>
      </div>
      <div className={styles['popular-section__cards']}>
        {paginatedMovies.map((movie) => (
          <Card movie={movie} />
        ))}
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
