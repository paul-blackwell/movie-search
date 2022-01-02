import { createReducer } from '@reduxjs/toolkit';
import { addToFavorites } from '../actions/favoritesActions';

const initialState = {
  value: [],
};

const favoritesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToFavorites, (state, action) => {
      console.log(state);
      state.value.push(action.payload);
    });
});

export default favoritesReducer;
