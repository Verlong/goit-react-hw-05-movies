import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  return (
    <div>
      <img src="#" alt="cast" />
      <h3>Name: {movieId}</h3>
      <p>cast</p>
    </div>
  );
};
export default Cast;
