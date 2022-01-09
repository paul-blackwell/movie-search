import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers/favoritesReducer';
import moviesReducer from './reducers/moviesReducer';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    movies: moviesReducer,
  },
});
