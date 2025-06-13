import { useMutation } from '@tanstack/react-query';

import {
  fetchAddFavoriteMovie,
  fetchDeleteFavoriteMovie,
} from '../api/movieApi';
import { queryClient } from '../api/queryClient';

export const useFavoriteMovieActions = () => {
  const addFavoriteMutation = useMutation({
    mutationFn: (movieId: number) => fetchAddFavoriteMovie(movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });
  const deleteFavoriteMutation = useMutation({
    mutationFn: (movieId: number) => fetchDeleteFavoriteMovie(movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });
  return { addFavoriteMutation, deleteFavoriteMutation };
};
