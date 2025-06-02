import type { FC } from 'react';
import DataMovie from '../../data/movie.json';

import './GenreCard.css';

interface GenreCardProps {
  className?: string;
}

export const GenreCard: FC<GenreCardProps> = ({ className }) => {
  return (
    <div className={`card-genre ${className || ''}`}>
      <img
        src={DataMovie.poster}
        className={`card-genre__img ${className || ''}`}
      />
      <div className={`card-genre__content ${className || ''}`}>
        <p className={`card-genre__text text ${className || ''}`}>
          {DataMovie.genre}
        </p>
      </div>
    </div>
  );
};
