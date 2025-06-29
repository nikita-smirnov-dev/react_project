import type { FC } from 'react';

import type { MovieGenre } from '../../types/movieTypes';

import './GenreCard.css';

interface GenreCardProps {
  genreMovie: MovieGenre;
  className?: string;
}

export const GenreCard: FC<GenreCardProps> = ({ genreMovie, className }) => {
  return (
    <div className={`card-genre ${className || ''}`}>
      <img
        src={genreMovie.image}
        alt={genreMovie.title}
        className={`card-genre__img ${className || ''}`}
      />
      <div className={`card-genre__content ${className || ''}`}>
        <p className={`card-genre__text text ${className || ''}`}>
          {genreMovie.title}
        </p>
      </div>
    </div>
  );
};
