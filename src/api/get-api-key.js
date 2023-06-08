import axios from 'axios';
const API_KEY = '60dca8f10f0481ca0ad574dccc048134';

const BASE_URL = 'https://api.themoviedb.org/3/';
// const LANGUAGE ='language=en-US'
// const TRANDING_MOVIE = 'trending/movie/day';
// const PER_PAGE = 10;

export const getTrendingMovies = async (page = 1) => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
  return data;
};

export const getSearchMovies = async (query, page = 1) => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return data;
};

export const getMovieDetails = async movie_id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieCast = async movie_id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieReviews = async movie_id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}`
  );
  return data;
};

// 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
// 'https://api.themoviedb.org/3/movie/movie_id?language=en-US'
// 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US'
// 'https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1'
