import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'; //

import { getMovieCast } from 'api/get-api-key';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCast(movieId).then(data => setCastList(data.cast));
  }, [movieId]);

  return (
    <ul>
      {castList.length > 0
        ? castList.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="actor"
                loading="lazy"
                width={120}
                height={180}
              />
              <h3>{name}</h3>
              <p>{character}</p>
            </li>
          ))
        : 'No one has left a review yet'}
    </ul>
  );
};
export default Cast;
