import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';

import { fetchTopMovie } from '../../api/movieApi';
import { DataLoader } from '../../UI/DataLoader';
import { MovieTopList } from './MovieTopList';
import { ErrorMessage } from '../../UI/ErrorMessage';

export const FetchMovieTopList: FC = () => {
  const movieTopQuery = useQuery({
    queryFn: () => fetchTopMovie(),
    queryKey: ['topMovie'],
    retry: 1,
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
        <ErrorMessage
          message="Не удалось загрузить фильмы!"
          onClick={() => movieTopQuery.refetch()}
        />
      );
  }
};
