import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './popular-section.module.scss';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';
import PaginationButtons from '../../molecules/pagination-buttons/pagination-buttons';
import Card from '../../molecules/card/card';
import useWindowDimensions from '../../../hooks/use-window-dimensions';

const PopularSection = ({ className, movies }) => {
  // This will give us the width of the viewport every time the window size changes
  const { width } = useWindowDimensions();

  // This will give us the number of cards we need to show depending on the screen size
  const cardsToShow = (arr) => {
    if (width > 1280) {
      return 4;
    }
    if (width > 1040) {
      return 3;
    }
    if (width > 768) {
      return 2;
    }
    return arr.length;
  };

  // Set up the states we will need for our pagination
  let popular = [...movies.popular];
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(cardsToShow(movies.popular));
  const [paginatedMovies, setPaginatedMovies] = useState(popular.slice(startIndex, endIndex));

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

  // Update paginatedMovies is startIndex or endIndex change
  useEffect(() => {
    popular = [...movies.popular];
    setPaginatedMovies(popular.slice(startIndex, endIndex));
  }, [startIndex, endIndex]);

  // If the width changes reset the pagination
  useEffect(() => {
    popular = [...movies.popular];
    setStartIndex(0);
    setEndIndex(cardsToShow(movies.popular));
    setPaginatedMovies(popular.slice(startIndex, endIndex));
  }, [width]);

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
          <Card movie={movie} key={movie.imdbID} />
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
