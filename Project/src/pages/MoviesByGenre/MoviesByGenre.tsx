import type { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { MovieCard } from '../../UI/MovieCard';
import { Button } from '../../UI/Button';

import './MoviesByGenre.css';

export const MoviesByGenre: FC = () => {
  return (
    <main>
      <section className="movies-genres">
        <div className="movies-genres__block">
          <IoIosArrowBack className="movies-genres__svg" />
          <h1 className="movies-genres__title section-title">Детектив</h1>
        </div>
        <ul className="movies-genres__list list-reset">
          <li className="movies-genres__item">
            <MovieCard hideRaiting={true} />
          </li>
          <li className="movies-genres__item">
            <MovieCard hideRaiting={true} />
          </li>
          <li className="movies-genres__item">
            <MovieCard hideRaiting={true} />
          </li>
          <li className="movies-genres__item">
            <MovieCard hideRaiting={true} />
          </li>
          <li className="movies-genres__item">
            <MovieCard hideRaiting={true} />
          </li>
          <li className="movies-genres__item">
            <MovieCard hideRaiting={true} />
          </li>
          <li className="movies-genres__item">
            <MovieCard hideRaiting={true} />
          </li>
          <li className="movies-genres__item">
            <MovieCard hideRaiting={true} />
          </li>
          <li className="movies-genres__item">
            <MovieCard hideRaiting={true} />
          </li>
          <li className="movies-genres__item">
            <MovieCard hideRaiting={true} />
          </li>
        </ul>
        <div className="movies-genres__btn-wrapper">
          <Button className="movies-genres__btn">Показать ещё</Button>
        </div>
      </section>
    </main>
  );
};
