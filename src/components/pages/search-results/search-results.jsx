import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './search-results.module.scss';
import ButtonBack from '../../atoms/button-back/button-back';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';

const SearchResults = () => {
  // Get search store
  const currentSearch = useSelector((state) => state.search.currentSearch);

  // If not a valid search show error toast
  const dispatch = useDispatch();
  if (!currentSearch.isValidSearch) {
    dispatch({
      type: 'SHOW_TOAST',
      payload: {
        display: true,
        message: currentSearch.errorMessage,
        type: 'error',
      },
    });
  }

  // User has navigated to the page and there is no data in currentSearch some info toast
  if (currentSearch.isValidSearch === null) {
    dispatch({
      type: 'SHOW_TOAST',
      payload: {
        display: true,
        message: 'Search for movies using the form at the top of the page',
        type: 'default',
      },
    });
  }

  // User has navigated to the page and there is no data in currentSearch
  if (currentSearch.isValidSearch === null) {
    return (
      <div className={styles['search-results']}>
        <ButtonBack to="/">
          Back
        </ButtonBack>
        <SecondaryHeading>Start searching for movies</SecondaryHeading>
      </div>
    );
  }

  // User has navigated to the page and there is no data in currentSearch
  if (!currentSearch.isValidSearch) {
    return (
      <div className={styles['search-results']}>
        <ButtonBack to="/">
          Back
        </ButtonBack>
        <SecondaryHeading>Please enter a valid search</SecondaryHeading>
      </div>
    );
  }

  // Is a valid search
  if (currentSearch.isValidSearch) {
    return (
      <div className={styles['search-results']}>
        <ButtonBack to="/">
          Back
        </ButtonBack>
        <SecondaryHeading className={styles['search-results__heading']}>
          {/* Just a placeholder */}
          This is what we found for
          <span className={styles['search-results__heading-span']}>&quot;Alien&quot;</span>
        </SecondaryHeading>
        <div className={styles['search-results__cards']}>
          {/* Render your cards here */}
        </div>
      </div>
    );
  }

  return (
    <div>
      <ButtonBack to="/">
        Back
      </ButtonBack>
      <SecondaryHeading>We could not find anything</SecondaryHeading>
    </div>
  );
};

export default SearchResults;
