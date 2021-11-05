import { Link } from 'react-router-dom';
import s from './TrendingList.module.css';

export default function TrendingList({ movies }) {
  return (
    <ul className="trending__list">
      {movies.map(movie => {
        return (
          <li key={movie.id} className={s.trending__item}>
            <Link to={`${movie.id}`}>
              {movie.original_title || movie.original_name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
