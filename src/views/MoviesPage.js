import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieByQuery } from '../services/api';
import MoviesList from '../components/MoviesList/MoviesList';
import MovieSearchForm from '../components/MovieSearchForm/MovieSearchForm';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);

  let location = useLocation();

  const urlQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    getMovieByQuery(urlQuery).then(setMovies);
  }, [urlQuery]);

  return (
    <div>
      <MovieSearchForm />
      {movies && <MoviesList movies={movies} />}
    </div>
  );
}
