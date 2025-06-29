import { useQuery } from '@tanstack/react-query';
import { type FC } from 'react';

import { fetchMovieVideoTrailer } from '../../api/movieApi';
import { DataLoader } from '../../UI/DataLoader';
import { MovieTrailer } from './MovieTrailer';
import { ErrorMessage } from '../../UI/ErrorMessage';

interface FetchTrailerProps {
  movieId: number;
}

export const FetchMovieTrailer: FC<FetchTrailerProps> = ({ movieId }) => {
  const { data, status, refetch } = useQuery({
    queryFn: () => fetchMovieVideoTrailer(Number(movieId)),

    queryKey: ['trailer', movieId],
    enabled: !!movieId,
    retry: 0,
  });
  switch (status) {
    case 'pending':
      return (
        <>
          <DataLoader />
        </>
      );
    case 'success':
      return (
        <main>
          <section>
            <MovieTrailer trailer={data} />
          </section>
        </main>
      );
    case 'error':
      return (
        <div>
          <ErrorMessage
            message="Не удалось загрузить трейлер фильма!"
            onClick={() => refetch()}
          />
        </div>
      );
  }
};
