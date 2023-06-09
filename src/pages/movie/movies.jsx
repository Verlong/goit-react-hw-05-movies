// import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
// import location from '../../components/movie-detail/movie-details';
import Loader from 'components/loader/Loader';

import { useState, useEffect } from 'react';
import { searchMovies } from 'api/get-api-key';
// import { useSearchParams, useLocation } from 'react-router-dom';
import Searchbar from 'components/searchbar/SearchBar';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setMoviesList([]);
    setIsLoading(true);

    searchMovies(movieName).then(data => {
      if (!data.results.length) {
        setIsLoading(false);
        setError(true);
        return console.log(
          'There is no movies with this request. Please, try again'
        );
      }
      setError(false);
      setMoviesList(data.results);
      setIsLoading(false);
    });
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
    searchForm.reset();
  };
  return (
    <main>
      <Searchbar onSubmit={handleSubmit} />
      {error && <p>We can't find any movie with name</p>}
      <ul>
        {moviesList.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title || movie.name}
              </Link>
            </li>
          );
        })}
        {isLoading && <Loader />}
      </ul>
    </main>
  );
};
export default Movies;

//  <img
//    src={
//      movie.poster_path
//        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
//        : `http://www.suryalaya.org/images/no_image.jpg`
//    }
//    width={320}
//    loading="lazy"
//    alt={movie.original_title}
//  />;
