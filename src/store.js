import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers/favoritesReducer';
import moviesReducer from './reducers/moviesReducer';
import toastReducer from './reducers/toastReducer';
import searchReducer from './reducers/searchReducer';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    movies: moviesReducer,
    toast: toastReducer,
    search: searchReducer,
  },
});
