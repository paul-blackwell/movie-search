import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      const movieID = action.payload.imdbID;
      const currentState = current(state.value);
      const updatedFavorites = currentState.filter((movie) => movie.imdbID !== movieID);
      state.value = updatedFavorites;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
