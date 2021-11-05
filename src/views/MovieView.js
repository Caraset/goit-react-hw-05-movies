import { useParams, Route, Routes } from 'react-router';
import { useState, useEffect } from 'react';

import { getMovieById } from '../services/api';

import MovieCard from '../components/MovieCard/MovieCard';

import SubMenu from '../components/SubMenu/SubMenu';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

export default function MovieView() {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    getMovieById(params.movieId).then(r => setMovie(r));
  }, [params.movieId]);

  return (
    <>
      {movie && (
        <>
          <MovieCard movie={movie} />
          <SubMenu />
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </>
      )}
    </>
  );
}
