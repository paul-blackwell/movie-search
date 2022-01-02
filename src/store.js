/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers/favoritesReducer';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
