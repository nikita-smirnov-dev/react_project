import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';

import { fetchTopMovie } from '../../api/movieApi';
import { DataLoader } from '../../UI/DataLoader';
import { MovieTopList } from './MovieTopList';

export const FetchMovieTopList: FC = () => {
  const movieTopQuery = useQuery({
    queryFn: () => fetchTopMovie(),
    queryKey: ['topMovie'],
  });

  switch (movieTopQuery.status) {
    case 'pending':
      return (
        <>
          <DataLoader />
        </>
      );
    case 'success':
      return <MovieTopList movieTopList={movieTopQuery.data} />;
    case 'error':
      return (
        <div>
          <span>Произошла ошибка!</span>
          <button onClick={() => movieTopQuery.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
  }
};
