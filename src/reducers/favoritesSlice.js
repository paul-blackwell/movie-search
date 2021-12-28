/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { addToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
