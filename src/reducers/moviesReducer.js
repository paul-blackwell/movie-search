import { createReducer } from '@reduxjs/toolkit';
import { setCurrentlySelectedMovie } from '../actions/moviesActions';

const initialState = {
  currentlySelectedMovie: '',
};

const moviesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentlySelectedMovie, (state, action) => {
      state.currentlySelectedMovie = action.payload;
    });
});

export default moviesReducer;
