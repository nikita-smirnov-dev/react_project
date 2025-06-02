import type { FC } from 'react';
import DataMovie from '../../data/movie.json';

import './MovieCard.css';

export interface MovieCardProps {
  className?: string;
}

export const MovieCard: FC<MovieCardProps> = ({ className }) => {
  return (
    <div className="movie-card-wrapper">
      <div className="movie-card__raiting">{1}</div>
      <div className="movie-card">
        <img
          src={DataMovie.poster}
          alt={DataMovie.title}
          className={`movie-card__img ${className || ''}`}
        />
      </div>
    </div>
  );
};
