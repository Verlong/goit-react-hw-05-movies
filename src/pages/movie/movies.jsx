import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
// import location from '../../components/movie-detail/movie-details';
const Movies = () => {
  const [movies, setMovies] = useState([
    'mov1',
    'mov2',
    'mov3',
    'mov4',
    'mov5',
    'mov6',
  ]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [isVissible, setIsVissible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(false);

  const movieId = searchParams.get('movieId') ?? '';
  const location = useLocation();
  const updateQueryString = event => {
    const movieIdValue = event.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const visibleMovie = movies.filter(movie => movie.includes(movieId));
  return (
    <>
      <input type="text" value={movieId} onChange={updateQueryString} />
      <button type="submit" onClick={() => setSearchParams({ c: 'hello' })}>
        🔎Search
      </button>
      {visibleMovie.map(movie => {
        return (
          <Link key={movie} to={`${movie}`} state={{ from: location }}>
            <ul>
              <li>{movie}</li>
            </ul>
          </Link>
        );
      })}
    </>
  );
};
export default Movies;
