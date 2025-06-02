import type { FC } from 'react';
import { MoviePreview } from '../../components/MoviePreview';
import { MovieTopList } from '../../components/MovieTopList';

export const Home: FC = () => {
  return (
    <main>
      <section>
        <MoviePreview />
      </section>
      <section>
        <MovieTopList />
      </section>
    </main>
  );
};
