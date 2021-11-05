import { useState, useEffect } from 'react';

import { getTrendingMovies } from '../services/api';
import MoviesList from '../components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies(1)
      .then(r => setMovies(r))
      .catch(r => console.log(r));
  }, []);

  return <MoviesList movies={movies} />;
}
