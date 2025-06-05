import { useQuery } from '@tanstack/react-query';
import { useEffect, type FC } from 'react';
import { fetchRandomMovie } from '../../api/movieApi';
import { DataLoader } from '../../UI/DataLoader';
import { MoviePreview } from './MoviePreview';
import { ErrorMessage } from '../../UI/ErrorMessage';

export const FetchMoviePreview: FC = () => {
  const { isLoading, data, isError, refetch } = useQuery({
    queryFn: () => fetchRandomMovie(),
    queryKey: ['randomMovie'],
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    initialData: () => {
      const saved = localStorage.getItem('randomMovie');
      return saved ? JSON.parse(saved) : undefined;
    },
  });

  useEffect(() => {
    if (data) {
      localStorage.setItem('randomMovie', JSON.stringify(data));
    }
  }, [data]);

  const handleUpdateClick = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <>
        <DataLoader />
      </>
    );
  }

  if (isError) {
    return (
      <ErrorMessage
        message="Не удалось загрузить фильм!"
        onClick={() => refetch()}
      />
    );
  }

  if (data) {
    return <MoviePreview movie={data} onUpdateClick={handleUpdateClick} />;
  }
};
