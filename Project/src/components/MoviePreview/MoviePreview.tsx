import { useEffect, useState, type FC } from 'react';
import { RiHeart3Fill, RiHeart3Line, RiLoopRightLine } from 'react-icons/ri';
import { useQuery } from '@tanstack/react-query';

import { Button } from '../../UI/Button';
import { Rating } from '../../UI/Rating';
import { genreTranslations } from '../../assets/data/genreTranslations';
import { getFormattedGenres } from '../../utils/getFormattedGenres';
import { getCorrectTimeMovie } from '../../utils/getCorrectTimeMovie';
import { useFavoriteMovieActions } from '../../hooks/useFavoriteMovieActions';
import { fetchFavoritesMovies } from '../../api/movieApi';
import { useAuthModal } from '../../hooks/useAuthModal';
import defaultPoster from '../../assets/images/default-img.jpg';
import type { RandomMovie } from '../../types/movieTypes';

import './MoviePreview.css';

interface MoviePreviewProps {
  movie: RandomMovie;
  showFilmButton?: boolean;
  showUpdateButton?: boolean;
  onUpdateClick?: VoidFunction;
}

export const MoviePreview: FC<MoviePreviewProps> = ({
  movie,
  showFilmButton = true,
  showUpdateButton = true,
  onUpdateClick,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addFavoriteMutation, deleteFavoriteMutation } =
    useFavoriteMovieActions();
  const { openModal } = useAuthModal();

  const { data: favorites } = useQuery({
    queryFn: fetchFavoritesMovies,
    queryKey: ['favorites'],
    retry: 0,
  });

  useEffect(() => {
    if (favorites && favorites.length > 0) {
      const isMovieInFavorite = favorites.some(
        (favorite) => favorite.id === movie.id
      );
      console.log(isMovieInFavorite);
      setIsFavorite(isMovieInFavorite);
    } else {
      setIsFavorite(false);
    }
  }, [favorites, movie.id]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      deleteFavoriteMutation.mutate(Number(movie.id), {
        onSuccess: () => {
          setIsFavorite(false);
        },
        onError: handleFavoriteError,
      });
    } else {
      addFavoriteMutation.mutate(Number(movie.id), {
        onSuccess: () => {
          setIsFavorite(true);
        },
        onError: handleFavoriteError,
      });
    }
  };

  const handleFavoriteError = (error: Error) => {
    if (
      error.message.includes('401') ||
      error.message.includes('unauthorized') ||
      error.message.includes('(Unauthorized)') ||
      error.message.includes('log in')
    ) {
      openModal();
    } else {
      console.error('Ошибка при добавлении в избранное:', error);
    }
  };

  return (
    <div className="movie-preview">
      <div className="movie-preview__left">
        <div className="movie-preview__left-info">
          <div className="movie-preview__left-raiting">
            <Rating value={movie.tmdbRating} />
          </div>
          <span className="movie-preview__left-year">{movie.releaseYear}</span>
          <span className="movie-preview__left-genre">
            {getFormattedGenres(movie.genres, genreTranslations).join(' ')}
          </span>
          <span className="movie-preview__left-runtime">
            {getCorrectTimeMovie(movie.runtime)}
          </span>
        </div>
        <h1 className="movie-preview__left-title section-title">
          {movie.title}
        </h1>
        <div className="movie-preview__description-container">
          <p className="movie-preview__left-descr">{movie.plot}</p>
        </div>
        <div className="movie-preview__buttons-container">
          <div className="movie-preview__trailer-container">
            <Button className="movie-preview__trailer">Трейлер</Button>
          </div>
          <div className="movie-preview__action-buttons ">
            {showFilmButton && (
              <Button className="movie-preview__film">О фильме</Button>
            )}

            <Button
              className="movie-preview__favorite"
              onClick={handleToggleFavorite}
            >
              {isFavorite ? (
                <RiHeart3Fill className="movie-preview__favorite-svg" />
              ) : (
                <RiHeart3Line />
              )}
            </Button>
            {showUpdateButton && (
              <Button className="movie-preview__update" onClick={onUpdateClick}>
                <RiLoopRightLine className="movie-preview__update-svg" />
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="movie-preview__right">
        <img src={movie.posterUrl || defaultPoster} alt={movie.title} />
      </div>
    </div>
  );
};
