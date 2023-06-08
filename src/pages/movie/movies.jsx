import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  //запрос
  //useEffect(()=> {http query? if it nead}, [])
  const [movies, setMovies] = useState([
    'mov1',
    'mov2',
    'mov3',
    'mov4',
    'mov5',
    'mov6',
  ]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  const updateQueryString = event => {
    const movieIdValue = event.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });

    // const nextParams = name !== '' ? { name } : {};
    // setSearchParams(nextParams);
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
          <Link key={movie} to={`${movie}`}>
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
