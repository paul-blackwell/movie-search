import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MovieSection from '../../organisms/movie-section/movie-section';

const Movie = () => {
  // Check if there is a currentlySelectedMovie, if there isn't navigate to home page
  const movieObj = useSelector((state) => state.movies.currentlySelectedMovie);
  const navigate = useNavigate();
  useEffect(() => {
    if (movieObj === '') {
      navigate('/');
    }
  }, []);

  if (movieObj) {
    return (
      <MovieSection movieObj={movieObj} />
    );
  }

  return null;
};

export default Movie;
