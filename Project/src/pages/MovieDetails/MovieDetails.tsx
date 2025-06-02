import type { FC } from 'react';
import { MoviePreview } from '../../components/MoviePreview';
import { AboutMovie } from '../../components/AboutMovie';
import './MovieDetails.css';

export const MovieDetails: FC = () => {
  return (
    <main>
      <section>
        <MoviePreview showFilmButton={false} showUpdateButton={false} />
      </section>
      <section>
        <AboutMovie />
      </section>
    </main>
  );
};
