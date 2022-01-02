const getMovieScore = (arr) => {
  const rottenTomatoes = arr.find(
    (rating) => rating.Source === 'Rotten Tomatoes',
  );
  if (rottenTomatoes) return rottenTomatoes.Value;

  const metacritic = arr.find((rating) => rating.Source === 'Metacritic');
  if (metacritic) return metacritic.Value;

  const internetMovieDatabase = arr.find(
    (rating) => rating.Source === 'Internet Movie Database',
  );
  if (internetMovieDatabase) return internetMovieDatabase.Value;

  return 'No score found';
};

export default getMovieScore;
