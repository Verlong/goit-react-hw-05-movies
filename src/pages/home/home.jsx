import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../api/get-api-key';
import Loader from '../../components/loader/Loader';
import css from './home.module.css';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);
  const path = 'https://image.tmdb.org/t/p/w300';
  return (
    <main className={css.topContainer}>
      <h1 className={css.wellcomeTitle}>Wellcome to Movie Land</h1>
      <h3 className={css.popularTitle}>Most popular movies today</h3>
      <ul className={css.topList}>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link
              className={css.topItem}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {/* {movie.original_title || movie.name} */}
              <img src={path + movie.poster_path} alt={movie.original_title} />
            </Link>
          </li>
        ))}
        {isLoading && <Loader />}
      </ul>
    </main>
  );
};
export default Home;
