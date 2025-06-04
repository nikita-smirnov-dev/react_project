import type { FC } from 'react';
import { MovieCard } from '../../UI/MovieCard';
import type { TopMovieList } from '../../types/movieTypes';

import './MovieTopList.css';

interface MovieTopListProps {
  movieTopList: TopMovieList;
}

export const MovieTopList: FC<MovieTopListProps> = ({ movieTopList }) => {
  return (
    <div className="top-movies">
      <h2 className="top-movies__title">Топ 10 фильмов</h2>
      <ul className="top-movies__list list-reset">
        {movieTopList.map((movie, index) => (
          <li key={movie.id}>
            <MovieCard movie={movie} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};
