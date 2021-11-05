import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getMovieRewiews } from '../../services/api';
import Review from './Review/Review';

import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const param = useParams();

  useEffect(() => {
    getMovieRewiews(param.movieId).then(r => setReviews(r));
  }, [param.movieId]);

  return (
    reviews && (
      <>
        {reviews.length === 0 ? (
          <div>We don't have any reviews for this movie.</div>
        ) : (
          <ul className={s.rewiews}>
            {reviews.map(review => (
              <li key={review.id} className={s.rewiews__item}>
                <Review reviews={review} />
              </li>
            ))}
          </ul>
        )}
      </>
    )
  );
}
