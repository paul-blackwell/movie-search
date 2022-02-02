import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonBack from '../../atoms/button-back/button-back';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';
import MovieSection from '../../organisms/movie-section/movie-section';

const SearchResults = () => {
  // Get search store
  const currentSearch = useSelector((state) => state.search.currentSearch);
  console.log(currentSearch);

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
