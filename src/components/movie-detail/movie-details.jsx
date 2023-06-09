import { useRef } from 'react';
import { Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
// import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { getMovieDetails } from 'api/get-api-key';

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

  return (
    <div>
      <Link to={backLinkLocationRef.current}>Back to main </Link>
      <div>
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
        <h2>{original_title}</h2>
        <h3>{release_date}</h3>
        <p>
          {genres &&
            genres.length &&
            genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </p>

        <p>{overview}</p>
        <h4>Vote total: {vote_count}</h4>
        <h4>Average: {vote_average}</h4>
      </div>
      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
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
