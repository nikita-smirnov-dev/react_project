import type { FC } from 'react';
import type { TopMovie } from '../../types/movieTypes';
import defaultPoster from '../../assets/images/default-img.jpg';

import './MovieCard.css';
import { IoMdClose } from 'react-icons/io';

export interface MovieCardProps {
  movie: TopMovie;
  className?: string;
  hideRaiting?: boolean;
  hideCloseButton?: boolean;
  onDeleteCard?: VoidFunction;
  index?: number;
}

export const MovieCard: FC<MovieCardProps> = ({
  movie,
  className,
  hideRaiting = false,
  hideCloseButton = true,
  onDeleteCard,
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
      {!hideCloseButton && (
        <button
          className="movie-card__btn-close btn-reset"
          onClick={onDeleteCard}
        >
          <IoMdClose className="movie-card__svg" />
        </button>
      )}
    </div>
  );
};
