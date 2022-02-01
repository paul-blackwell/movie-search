import { createReducer } from '@reduxjs/toolkit';
import { setSearch } from '../actions/searchActions';

const initialState = {
  currentSearch: {
    isValidSearch: false,
    errorMessage: '',
    query: '',
  },
  movies: [],
};

const moviesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSearch, (state, action) => {
      const { isValidSearch, errorMessage, query } = action.currentSearch;

      // If not a valid search don't make API request but just return updated state
      if (!isValidSearch) {
        state.currentlySelectedMovie = {
          isValidSearch,
          errorMessage,
          query: '',
        };
        state.movies = [];
      }
    });
});

export default moviesReducer;
