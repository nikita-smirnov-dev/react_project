import type { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { MovieCard } from '../../UI/MovieCard';
import { Button } from '../../UI/Button';

import './MoviesByGenre.css';
import type { MovieByGenre } from '../../types/movieTypes';

interface MoviesByGenresProps {
  movieListByGenre: MovieByGenre;
  onloadMore: () => void;
}

export const MoviesByGenre: FC<MoviesByGenresProps> = ({
  movieListByGenre,
  onloadMore,
}) => {
  return (
    <main>
      <section className="movies-genres">
        <div className="movies-genres__block">
          <IoIosArrowBack className="movies-genres__svg" />
          <h1 className="movies-genres__title section-title">Детектив</h1>
        </div>
        <ul className="movies-genres__list list-reset">
          {movieListByGenre.map((movie) => (
            <li className="movies-genres__item" key={movie.id}>
              <MovieCard movie={movie} hideRaiting={true} />
            </li>
          ))}
        </ul>
        <div className="movies-genres__btn-wrapper">
          {movieListByGenre.length < 50 && (
            <Button className="movies-genres__btn" onClick={onloadMore}>
              Показать ещё
            </Button>
          )}
        </div>
      </section>
    </main>
  );
};
