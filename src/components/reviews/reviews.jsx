import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'api/get-api-key';
const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviewsList(data.results));
  }, [movieId]);
  return (
    <ul>
      {reviewsList.length > 0
        ? reviewsList.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        : "Sorry, we don't have any review for this movie"}
    </ul>
  );
};

export default Reviews;
