import { MovieCard } from '../../UI/MovieCard';
import './MovieTopList.css';

export const MovieTopList = () => {
  return (
    <div className="top-movies">
      <h2 className="top-movies__title">Топ 10 фильмов</h2>
      <ul className="top-movies__list list-reset">
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
      </ul>
    </div>
  );
};
