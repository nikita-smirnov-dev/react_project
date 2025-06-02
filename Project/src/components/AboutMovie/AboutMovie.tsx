import type { FC } from 'react';

import { MovieInfo } from '../MovieInfo';

import './AboutMovie.css';

export const AboutMovie: FC = () => {
  return (
    <div className="about-movie">
      <h2 className="about-movie__title section-title">О фильме</h2>
      <MovieInfo description="Язык оригинала" value={'отсутствует'} />
      <MovieInfo description="Бюджет" value={'отсутствует'} />
      <MovieInfo description="Выручка" value={'отсутствует'} />
      <MovieInfo description="Режиссёр" value={'отсутствует'} />
      <MovieInfo description="Продакшен" value={'отсутствует'} />
      <MovieInfo description="Награды" value={'отсутствует'} />
    </div>
  );
};
