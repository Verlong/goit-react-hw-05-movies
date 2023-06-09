import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../api/get-api-key';
import Loader from '../../components/loader/Loader';

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

  return (
    <main>
      <h1>Wellcome to Movie Land</h1>
      <h3>Most popular movies today</h3>
      <ul>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </Link>
          </li>
        ))}
        {isLoading && <Loader />}
      </ul>
    </main>
  );
};
export default Home;
