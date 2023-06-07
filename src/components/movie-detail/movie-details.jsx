import { Link, useParams, Outlet } from 'react-router-dom';
const MovieDetails = () => {
  const { movieId } = useParams();
  //запрос
  //useEffect(()=> {http query? if it nead}, [])

  return (
    <div>
      <div>
        <img src="poster_path" alt="poster img" />
        <h2>Original_title {movieId}</h2>
        <h3>Release_date</h3>
        <h3>Genre</h3>
        <h3>Overview</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          reprehenderit! Magnam impedit nam nesciunt odit, similique dolores
          minus expedita doloremque, animi fugit tenetur quod autem, praesentium
          excepturi sed optio dignissimos!
        </p>
        <h4>Vote_count: </h4>
        <h4>Vote_average: </h4>
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
      <Outlet />
    </div>
  );
};

export default MovieDetails;
