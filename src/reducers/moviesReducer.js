import { createReducer } from '@reduxjs/toolkit';
import { setCurrentlySelectedMovie } from '../actions/moviesActions';

const initialState = {
  value: '',
};

const moviesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentlySelectedMovie, (state, action) => {
      state.value = action.payload;
    });
});

export default moviesReducer;
