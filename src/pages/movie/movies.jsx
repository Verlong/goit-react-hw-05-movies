import { Link, useSearchParams, useLocation } from 'react-router-dom';
import Loader from 'components/loader/Loader';
import { useState, useEffect } from 'react';
import { searchMovies } from 'api/get-api-key';
import Searchbar from 'components/searchbar/SearchBar';
import css from './movies.module.css';

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
    // searchForm.reset();
  };

  // console.log(moviesList);
  const path = 'https://image.tmdb.org/t/p/w300';

  return (
    <main className={css.moviesContainer}>
      <Searchbar className={css.searchbar} onSubmit={handleSubmit} />
      {error && <p>We can't find any movie with name</p>}
      <ul className={css.searchMovieList}>
        {moviesList.map(movie => {
          return (
            <li className={css.searchMovieItem} key={movie.id}>
              <Link
                className={css.searchMovieLink}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                <img
                  className={css.searchMovieImg}
                  src={
                    movie.poster_path
                      ? path + movie.poster_path
                      : 'http://www.suryalaya.org/images/no_image.jpg'
                  }
                  alt={movie.original_title}
                  width={300}
                />
                {movie.title || movie.name}
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
