import type { FC } from 'react';
import { Button } from '../../UI/Button';
import { RiHeart3Line } from 'react-icons/ri';
import { RiLoopRightLine } from 'react-icons/ri';

import type { RandomMovie } from '../../types/movieTypes';
import defaultPoster from '../../assets/images/default-img.jpg';

import './MoviePreview.css';
import { Rating } from '../../UI/Rating';
import { genreTranslations } from '../../assets/data/genreTranslations';
import { getFormattedGenres } from '../../utils/getFormattedGenres';
import { getCorrectTimeMovie } from '../../utils/getCorrectTimeMovie';

interface MoviePreviewProps {
  movie: RandomMovie;
  showFilmButton?: boolean;
  showUpdateButton?: boolean;
  onUpdateClick?: VoidFunction;
}

export const MoviePreview: FC<MoviePreviewProps> = ({
  movie,
  showFilmButton = true,
  showUpdateButton = true,
  onUpdateClick,
}) => {
  return (
    <div className="movie-preview">
      <div className="movie-preview__left">
        <div className="movie-preview__left-info">
          <div className="movie-preview__left-raiting">
            <Rating value={movie.tmdbRating} />
          </div>
          <span className="movie-preview__left-year">{movie.releaseYear}</span>
          <span className="movie-preview__left-genre">
            {getFormattedGenres(movie.genres, genreTranslations).join(' ')}
          </span>
          <span className="movie-preview__left-runtime">
            {getCorrectTimeMovie(movie.runtime)}
          </span>
        </div>
        <h1 className="movie-preview__left-title section-title">
          {movie.title}
        </h1>
        <div className="movie-preview__description-container">
          <p className="movie-preview__left-descr">{movie.plot}</p>
        </div>
        <div className="movie-preview__buttons-container">
          <div className="movie-preview__trailer-container">
            <Button className="movie-preview__trailer">Трейлер</Button>
          </div>
          <div className="movie-preview__action-buttons ">
            {showFilmButton && (
              <Button className="movie-preview__film">О фильме</Button>
            )}

            <Button className="movie-preview__favorite">
              <RiHeart3Line className="movie-preview__favorite-svg" />
            </Button>
            {showUpdateButton && (
              <Button className="movie-preview__update" onClick={onUpdateClick}>
                <RiLoopRightLine className="movie-preview__update-svg" />
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="movie-preview__right">
        <img src={movie.posterUrl || defaultPoster} alt={movie.title} />
      </div>
    </div>
  );
};
