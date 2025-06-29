import type { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';

import type { MovieByGenre } from '../../types/movieTypes';
import { MovieCard } from '../../UI/MovieCard';
import { Button } from '../../UI/Button';
import { genreTranslations } from '../../assets/data/genreTranslations';

import './MoviesByGenre.css';

interface MoviesByGenresProps {
  movieListByGenre: MovieByGenre;
  onloadMore: () => void;
}

export const MoviesByGenre: FC<MoviesByGenresProps> = ({
  movieListByGenre,
  onloadMore,
}) => {
  const { genreSlug } = useParams();
  const genreTitle =
    genreTranslations[genreSlug as keyof typeof genreTranslations];

  return (
    <main>
      <section className="movies-genres">
        <div className="movies-genres__block">
          <Link
            className="movies-genres__button"
            to=".."
            relative="path"
            aria-label="Вернуться к списку жанров"
          >
            <IoIosArrowBack className="movies-genres__svg" aria-hidden="true" />
          </Link>
          <h1 className="movies-genres__title section-title">
            {genreTitle ? genreTitle : genreSlug}
          </h1>
        </div>
        <ul className="movies-genres__list list-reset">
          {movieListByGenre.map((genre) => (
            <li className="movies-genres__item" key={genre.id}>
              <Link to={`/about/${genre.id}`}>
                <MovieCard movie={genre} hideRaiting={true} />
              </Link>
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
