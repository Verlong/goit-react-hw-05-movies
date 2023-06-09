import { useRef } from 'react';
import { Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'api/get-api-key';
import css from './movie-detail.module.css';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovieDetail(data));
  }, [movieId]);

  const {
    original_title,
    overview,
    genres,
    poster_path,
    vote_average,
    release_date,
    vote_count,
  } = movieDetail;

  const date = new Date(release_date);

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('en-US', options);
  console.log(formattedDate);

  return (
    <div className={css.container}>
      <Link to={backLinkLocationRef.current} className={css.backToMainLink}>
        Back to main{' '}
      </Link>
      <div className={css.movieInfoWrapper}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }
          width={320}
          loading="lazy"
          alt={original_title}
        />
        <div className={css.movieInfo}>
          <h2>{original_title}</h2>
          <h3>{formattedDate}</h3>
          <ul className={css.ganres}>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
          <p className={css.owerview}>{overview}</p>
          <h4>Vote total: {vote_count}</h4>
          <h4>Average: {vote_average}</h4>
        </div>
      </div>
      <div>
        <ul className={css.navList}>
          <li>
            <Link to="cast" className={css.navLink}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.navLink}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
