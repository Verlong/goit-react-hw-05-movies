const PER_PAGE = 10;
export default async function getMovie(inputValue, page = 1) {
  const API_KEY = '60dca8f10f0481ca0ad574dccc048134';
  const BASE_URL = 'https://api.themoviedb.org/3/';

  return await fetch(
    `${BASE_URL}?q=${inputValue}&page=${page}&key=${API_KEY}&per_page=${PER_PAGE}`
  ).then(res => res.json());
}
// 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
// 'https://api.themoviedb.org/3/movie/movie_id?language=en-US'
// 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US'
// 'https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1'
