// import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
// import Movies from '../pages/movie/movies';
// import Home from '../pages/home/home';
// import MovieDetails from './movie-detail/movie-details';
import Reviews from './reviews/reviews';
import Cast from './cast/cast';
import SharedLayout from './shared-layout/SharedLayout';
import NotFound from 'pages/not-found/NotFound';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/home'));
const Movies = lazy(() => import('../pages/movie/movies'));
const MovieDetails = lazy(() =>
  import('../components/movie-detail/movie-details')
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
