import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchFavoritesMovies } from '../../api/movieApi';
import { DataLoader } from '../../UI/DataLoader';
import { FavoritesMoviesList } from './FavoritesMoviesList';
import { ErrorMessage } from '../../UI/ErrorMessage';

export const FetchFavoritesMoviesList: FC = () => {
  const favoritesMoviesQuery = useQuery({
    queryFn: () => fetchFavoritesMovies(),
    queryKey: ['favorites'],
    retry: 0,
  });

  switch (favoritesMoviesQuery.status) {
    case 'pending':
      return (
        <>
          <DataLoader />
        </>
      );
    case 'success':
      return (
        <FavoritesMoviesList moviesFavorites={favoritesMoviesQuery.data} />
      );
    case 'error':
      return (
        <ErrorMessage
          message="Не удалось загрузить избранные фильмы!"
          onClick={() => favoritesMoviesQuery.refetch()}
        />
      );
  }
};
