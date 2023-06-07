// import PropTypes from 'prop-types';
import { Routes, Route, NavLink } from 'react-router-dom';
import Movies from '../pages/movie/movies';
import Home from '../pages/home/home';
import MovieDetails from './movie-detail/movie-details';
import Reviews from './reviews/reviews';
import Cast from './cast/cast';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">🏠Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">🎬Movie</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews " element={<Reviews />} />
      </Routes>
    </div>
  );
};
