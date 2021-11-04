import { useState, useEffect } from 'react';

import { getTrendingMovies } from '../services/api';
import TrendingList from '../components/TrendingList/TrendingList';

export default function TrendingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies(1)
      .then(r => setMovies(r))
      .catch(r => console.log(r));
  }, []);

  return <TrendingList movies={movies} />;
}
