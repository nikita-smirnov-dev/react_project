import type { FC } from 'react';
import defaultPoster from '../assets/images/default-img.jpg';

import './SearchListItem.css';
import type { MovieSearchByTitle } from '../types/movieTypes';
import { Rating } from '../UI/Rating';
import { getFormattedGenres } from '../utils/getFormattedGenres';
import { genreTranslations } from '../assets/data/genreTranslations';
import { getCorrectTimeMovie } from '../utils/getCorrectTimeMovie';

interface SearchListItemProps {
  movieSearch: MovieSearchByTitle;
}

export const SearchListItem: FC<SearchListItemProps> = ({ movieSearch }) => {
  return (
    <div className="search-content">
      <div className="search-content__left">
        <img
          className="search-content__img"
          src={movieSearch.posterUrl || defaultPoster}
          alt={movieSearch.title}
        />
      </div>
      <div className="search-content__right">
        <div className="search-content__right-info">
          <Rating
            className="search-content__right-rating"
            value={movieSearch.tmdbRating}
          />
          <span className="search-content__right-year">
            {movieSearch.releaseYear}
          </span>
          <span className="search-content__right-genre">
            {' '}
            {getFormattedGenres(movieSearch.genres, genreTranslations).join(
              ' '
            )}
          </span>
          <span className="search-content__right-runtime">
            {getCorrectTimeMovie(movieSearch.runtime)}
          </span>
        </div>
        <div className="search-content__right-title">
          <h2 className="search-content__right-text">{movieSearch.title}</h2>
        </div>
      </div>
    </div>
  );
};
