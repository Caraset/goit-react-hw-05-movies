const KEY = '94f703750c3e0771d8c2babc592efc94';
const URL = `https://api.themoviedb.org/3/`;

async function getTrendingMovies(pageNum) {
  const firstRespons = await fetch(
    `${URL}/trending/all/day?api_key=${KEY}&page=${pageNum}`,
  );

  const parsedRespons = await firstRespons.json();

  console.log('parsedRespons.results: ', parsedRespons.results);
  return parsedRespons.results;
}

export { getTrendingMovies };
