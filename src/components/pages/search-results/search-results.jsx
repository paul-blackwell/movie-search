import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonBack from '../../atoms/button-back/button-back';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';
import MovieSection from '../../organisms/movie-section/movie-section';

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
