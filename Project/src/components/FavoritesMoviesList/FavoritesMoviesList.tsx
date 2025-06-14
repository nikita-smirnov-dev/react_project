import type { FC } from 'react';

import type { FavoritesMovies } from '../../types/movieTypes';
import { MovieCard } from '../../UI/MovieCard';
import { useFavoriteMovieActions } from '../../hooks/useFavoriteMovieActions';

import './FavoritesMoviesList.css';

interface FavoritesMoviesProps {
  moviesFavorites: FavoritesMovies;
}

export const FavoritesMoviesList: FC<FavoritesMoviesProps> = ({
  moviesFavorites,
}) => {
  const { deleteFavoriteMutation } = useFavoriteMovieActions();

  const deleteFavoriteMovieCard = (favorite: FavoritesMovies[0]) => {
    deleteFavoriteMutation.mutate(Number(favorite.id));
  };

  return (
    <div className="favorites-container ">
      <div className="favorites-movies">
        {!moviesFavorites.length && (
          <h2 className="favorites-movies__title">
            У вас пока нет избранных фильмов
          </h2>
        )}
        <ul className="favorites-movies__list list-reset">
          {moviesFavorites.map((favoriteMovie) => (
            <li key={favoriteMovie.id}>
              <MovieCard
                movie={favoriteMovie}
                hideRaiting={true}
                hideCloseButton={false}
                onDeleteCard={() => deleteFavoriteMovieCard(favoriteMovie)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
