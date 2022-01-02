import { createReducer } from '@reduxjs/toolkit';
import { addToFavorites, removeFromFavorites } from '../actions/favoritesActions';

const initialState = {
  value: [],
};

const favoritesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToFavorites, (state, action) => {
      console.log(state);
      state.value.push(action.payload);
    })
    .addCase(removeFromFavorites, (state, action) => {
      const movieID = action.payload.imdbID;
      const updatedFavorites = state.value.filter((movie) => movie.imdbID !== movieID);
      state.value = updatedFavorites;
    });
});

export default favoritesReducer;
