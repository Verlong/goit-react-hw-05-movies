import { Link } from 'react-router-dom';

const Movies = () => {
  //запрос
  //useEffect(()=> {http query? if it nead}, [])

  return (
    <>
      {['mov-1', 'mov-2', 'mov-3', 'mov-4', 'mov-5'].map(movie => {
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
