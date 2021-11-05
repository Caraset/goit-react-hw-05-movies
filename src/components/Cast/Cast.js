import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getMovieCast } from '../../services/api';
import ActorCard from './ActorCard/ActorCard';

import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const param = useParams();

  useEffect(() => {
    getMovieCast(param.movieId).then(({ cast }) => setCast(cast));
  }, [param.movieId]);

  return (
    cast && (
      <ul className={s.cast}>
        {cast.map(actor => (
          <li key={actor.id} className={s.cast__item}>
            <ActorCard actor={actor} />
          </li>
        ))}
      </ul>
    )
  );
}
