import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import MovieSection from '../../organisms/movie-section/movie-section';

const Movie = () => {
  // We need to get our params from the url
  const getParams = useParams();

  // Get our currently selected movie
  const movieObj = useSelector((state) => state.movies.currentlySelectedMovie);

  const navigate = useNavigate();

  // We can't call navigate() when the component is first rendered so we must use the useEffect hook
  useEffect(() => {
    // If movie title not found set navigate to home
    if (Object.entries(getParams).length === 0) {
      navigate('/');
      return;
    }

    // If there is no currentlySelectedMovie navigate to home
    if (movieObj === '') {
      navigate('/');
      return;
    }

    // If the ID url param is not the same as the imdbID navigate to home
    const { movieID } = getParams;
    if (movieObj.imdbID !== movieID) {
      navigate('/');
    }
  }, []);

  if (movieObj !== '') {
    return (
      <MovieSection movieObj={movieObj} dropDown removeFromFavoritesBtn divider />
    );
  }

  return null;
};

export default Movie;
