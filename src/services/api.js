import axios from 'axios';

const movieDbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '94f703750c3e0771d8c2babc592efc94',
  },
});

async function getTrendingMovies(page) {
  const params = {
    page,
  };

  const respons = await movieDbApi.get(`/trending/movie/day`, { params });

  return respons.data.results;
}

async function getMovieById(movieId) {
  const respons = await movieDbApi.get(`/movie/${movieId}`);

  return respons.data;
}

async function getMovieByQuery(query) {
  if (!query) {
    return;
  }

  const params = {
    query,
  };

  const respons = await movieDbApi.get('search/movie', { params });

  return respons.data.results;
}

async function getMovieCast(movieId) {
  const respons = await movieDbApi(`/movie/${movieId}/credits`);

  return respons.data;
}

async function getMovieRewiews(movieId) {
  const respons = await movieDbApi(`/movie/${movieId}/reviews`);

  return respons.data.results;
}

export {
  getTrendingMovies,
  getMovieById,
  getMovieCast,
  getMovieRewiews,
  getMovieByQuery,
};
