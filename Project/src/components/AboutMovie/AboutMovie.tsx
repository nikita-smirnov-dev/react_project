import type { FC } from 'react';

import { MovieInfo } from '../MovieInfo';
import type { DetailsMovie } from '../../types/movieTypes';
import { languageDetails } from '../../assets/data/languageMovieDetails';

import './AboutMovie.css';

type AboutMovieProps = Pick<
  DetailsMovie,
  | 'language'
  | 'budget'
  | 'director'
  | 'revenue'
  | 'awardsSummary'
  | 'production'
>;

interface MovieProps {
  movieInfo: AboutMovieProps;
}

export const AboutMovie: FC<MovieProps> = ({ movieInfo }) => {
  return (
    <div className="about-movie">
      <h2 className="about-movie__title section-title">О фильме</h2>
      <MovieInfo
        description="Язык оригинала"
        value={languageDetails[movieInfo.language ?? 'отсутствует']}
      />
      <MovieInfo
        description="Бюджет"
        value={movieInfo.budget ?? 'отсутствует'}
      />
      <MovieInfo
        description="Выручка"
        value={movieInfo.revenue ?? 'отсутствует'}
      />
      <MovieInfo
        description="Режиссёр"
        value={movieInfo.director ?? 'отсутствует'}
      />
      <MovieInfo
        description="Продакшен"
        value={movieInfo.production ?? 'отсутствует'}
      />
      <MovieInfo
        description="Награды"
        value={movieInfo.awardsSummary ?? 'отсутствует'}
      />
    </div>
  );
};
