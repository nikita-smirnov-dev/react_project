import type { FC } from 'react';
import { Button } from '../../UI/Button';
import { RiHeart3Line } from 'react-icons/ri';
import { RiLoopRightLine } from 'react-icons/ri';
import MovieData from '../../data/movie.json';

import './MoviePreview.css';
interface MoviePreviewProps {
  showFilmButton?: boolean;
  showUpdateButton?: boolean;
}

export const MoviePreview: FC<MoviePreviewProps> = ({
  showFilmButton = true,
  showUpdateButton = true,
}) => {
  return (
    <div className="movie-preview">
      <div className="movie-preview__left">
        <div className="movie-preview__left-info">
          <div className="movie-preview__left-raiting">{MovieData.rating}</div>
          <span className="movie-preview__left-year">{MovieData.year}</span>
          <span className="movie-preview__left-genre">{MovieData.genre}</span>
          <span className="movie-preview__left-runtime">{MovieData.time}</span>
        </div>
        <h1 className="movie-preview__left-title section-title">
          {MovieData.title}
        </h1>
        <div className="movie-preview__description-container">
          <p className="movie-preview__left-descr">{MovieData.description}</p>
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
              <Button className="movie-preview__update">
                <RiLoopRightLine className="movie-preview__update-svg" />
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="movie-preview__right">
        <img src={MovieData.poster} />
      </div>
    </div>
  );
};
