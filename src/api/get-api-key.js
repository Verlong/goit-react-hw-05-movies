import axios from 'axios';
const API_KEY = '60dca8f10f0481ca0ad574dccc048134';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};

// 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
// 'https://api.themoviedb.org/3/movie/movie_id?language=en-US'
// 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US'
// 'https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1'
