export default async function getMovie(inputValue, page = 1) {
  const API_KEY = '60dca8f10f0481ca0ad574dccc048134';
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

  return await fetch(`${BASE_URL}?${inputValue}&${API_KEY}`);
}
// with_cast;
