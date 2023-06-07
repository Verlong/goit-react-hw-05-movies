import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  return (
    <div>
      <h2>Reviews: {movieId}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
        corrupti laborum explicabo, deleniti aperiam culpa fugiat. Non ipsa
        fugit sequi ducimus, aliquid consequatur temporibus, numquam eos, minus
        rem dolores nihil.
      </p>
    </div>
  );
};

export default Reviews;
