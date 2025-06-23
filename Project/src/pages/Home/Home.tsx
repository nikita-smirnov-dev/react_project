import type { FC } from 'react';
import { FetchMoviePreview } from '../../components/MoviePreview';
import { FetchMovieTopList } from '../../components/MovieTopList';

export const Home: FC = () => {
  return (
    <main>
      <section>
        <FetchMoviePreview />
      </section>
      <section>
        <FetchMovieTopList />
      </section>
    </main>
  );
};

export default Home;
