const KEY = '94f703750c3e0771d8c2babc592efc94';
const URL = `https://api.themoviedb.org/3/`;

async function getTrendingMovies(pageNum) {
  const firstRespons = await fetch(
    `${URL}/trending/movie/day?api_key=${KEY}&page=${pageNum}`,
  );

  const parsedRespons = await firstRespons.json();

  return parsedRespons.results;
}

async function getMovieById(movieId) {
  const respons = await fetch(`${URL}/movie/${movieId}?api_key=${KEY}`);

  const parsedRespons = await respons.json();
  return parsedRespons;
}

async function getMovieCast(movieId) {
  const respons = await fetch(`${URL}/movie/${movieId}/credits?api_key=${KEY}`);

  const parsedRespons = await respons.json();
  return parsedRespons;
}

// {movie_id}/credits?api_key=<<api_key>>&language=en-US

export { getTrendingMovies, getMovieById, getMovieCast };
