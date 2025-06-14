import { useRef, type FC } from 'react';
import ReactPlayer from 'react-player';

import type { MovieVideoTrailer } from '../../types/movieTypes';

import './MovieTrailer.css';

interface MovieTrailerProps {
  trailer: MovieVideoTrailer;
}

export const MovieTrailer: FC<MovieTrailerProps> = ({ trailer }) => {
  const videoRef = useRef<ReactPlayer>(null);
  return (
    <div className="movie-trailer">
      <div className="player-container">
        <ReactPlayer
          className="player-content"
          ref={videoRef}
          width="100%"
          height="100%"
          url={`https://www.youtube.com/watch?v=${
            trailer.trailerYouTubeId || trailer.trailerUrl
          }`}
          controls={true}
        />
      </div>
    </div>
  );
};
