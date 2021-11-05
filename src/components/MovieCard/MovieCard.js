import PropTypes from 'prop-types';
import s from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const { title, poster_path, popularity, overview, genres } = movie;

  return (
    <div className={s.movieCard}>
      <img
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={`poster of ${title}`}
        className={s.movieCard__poster}
      />
      <div className={s.movieCard__desc}>
        <h2 className={s.movieCard__title}>{title}</h2>
        <span className={s.movieCard__score}>
          User score {Math.round(popularity)}
        </span>

        <h3 className={s.movieCard__title}>Overview</h3>
        <p className={s.movieCard__overview}>{overview}</p>

        <h3 className={s.movieCard__title}>Genres</h3>
        <span className={s.movieCard__genres}>
          {genres.map(gen => gen.name).join(', ')}
        </span>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
};
