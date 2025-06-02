import type { FC } from 'react';

import './MovieInfo.css';

interface MovieInfoProps {
  description: string;
  value: string;
}

export const MovieInfo: FC<MovieInfoProps> = ({ description, value }) => {
  return (
    <div className="movie-info">
      <p className="movie-info__text">
        <span className="movie-info__descr">{description}</span>
        <span className="movie-info__dots">&nbsp;</span>
        <span className="movie-info__value">{value}</span>
      </p>
    </div>
  );
};
