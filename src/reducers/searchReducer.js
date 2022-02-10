import { createReducer } from '@reduxjs/toolkit';
import { setSearch } from '../actions/searchActions';

const initialState = {
  currentSearch: {
    isValidSearch: null,
    errorMessage: '',
    search: '',
    type: '',
  },
  results: [],
};

const searchReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSearch, (state, action) => {
      const {
        isValidSearch,
      } = action.payload.currentSearch;

      // If not a valid search don't make API request but just return updated state
      if (!isValidSearch) {
        state.currentSearch = { ...action.payload.currentSearch };
        state.results = [];
      }

      // Is valid search
      if (isValidSearch) {
        state.currentSearch = { ...action.payload.currentSearch };
        state.results = [];
      }
    });
});

export default searchReducer;
