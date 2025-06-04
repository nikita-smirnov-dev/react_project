import type { FC } from 'react';
import type { TopMovie } from '../../types/movieTypes';
import defaultPoster from '../../assets/images/default-img.jpg';

import './MovieCard.css';

export interface MovieCardProps {
  movie: TopMovie;
  className?: string;
  hideRaiting?: boolean;
  index?: number;
}

export const MovieCard: FC<MovieCardProps> = ({
  movie,
  className,
  hideRaiting = false,
  index = 1,
}) => {
  const rating = ++index;

  return (
    <div className="movie-card-wrapper">
      {!hideRaiting && <div className="movie-card__raiting">{rating}</div>}

      <div className="movie-card">
        <img
          src={movie.posterUrl || defaultPoster}
          alt={movie.title}
          className={`movie-card__img ${className || ''}`}
        />
      </div>
    </div>
  );
};
