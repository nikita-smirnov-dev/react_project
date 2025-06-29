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
import type { DetailsMovie, RandomMovie } from '../../types/movieTypes';
import { Modal } from '../Modal';

import './MoviePreview.css';
import { useNavigate } from 'react-router-dom';
import { FetchMovieTrailer } from '../MovieTrailer';
import { useTrailerModal } from '../../hooks/useTrailerModal';

interface MoviePreviewProps {
  movie: RandomMovie | DetailsMovie;
  showFilmButton?: boolean;
  showUpdateButton?: boolean;
  onUpdateClick?: VoidFunction;
  isDetailsPage?: boolean;
}

export const MoviePreview: FC<MoviePreviewProps> = ({
  movie,
  showFilmButton = true,
  showUpdateButton = true,
  onUpdateClick,
  isDetailsPage = false,
}) => {
  const { isModalTrailerOpen, openModalTrailer, closeModalTrailer } =
    useTrailerModal();
  const [isFavorite, setIsFavorite] = useState(false);
  const { addFavoriteMutation, deleteFavoriteMutation } =
    useFavoriteMovieActions();
  const { openModal } = useAuthModal();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const isLongText = movie.plot && movie.plot.length > 150;
  const navigate = useNavigate();

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

  const handleAboutMovie = () => {
    navigate(`/about/${movie.id}`);
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
            {getFormattedGenres(
              movie.genres,
              genreTranslations,
              window.innerWidth <= 375 ? 1 : undefined
            ).join(' ')}
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
          {isLongText && (
            <button
              className="movie-preview__read-more btn-reset"
              onClick={() => setShowFullDescription(true)}
            >
              Читать полностью
            </button>
          )}
          {showFullDescription && (
            <Modal
              isOpen={showFullDescription}
              onClose={() => setShowFullDescription(false)}
            >
              <div className="movie-preview__descr-container">
                <p className="movie-preview__descr">{movie.plot}</p>
              </div>
            </Modal>
          )}
        </div>
        <div
          className={`movie-preview__buttons-container ${
            isDetailsPage ? 'movie-preview__buttons--details' : ''
          }`}
        >
          <div className="movie-preview__trailer-container">
            <Button
              className="movie-preview__trailer"
              onClick={() => openModalTrailer()}
            >
              Трейлер
            </Button>
          </div>
          <div
            className={`movie-preview__action-buttons ${
              isDetailsPage ? 'movie-preview__action-buttons--details' : ''
            }`}
          >
            {showFilmButton && (
              <Button
                className="movie-preview__film"
                onClick={handleAboutMovie}
                variantAction="secondary"
              >
                О фильме
              </Button>
            )}

            <Button
              className="movie-preview__favorite"
              onClick={handleToggleFavorite}
              variantAction="secondary"
              aria-label={
                isFavorite
                  ? 'Удалить фильм из избранного'
                  : 'Добавить фильм в избранное'
              }
            >
              {isFavorite ? (
                <RiHeart3Fill className="movie-preview__favorite-svg" />
              ) : (
                <RiHeart3Line />
              )}
            </Button>
            {showUpdateButton && (
              <Button
                className="movie-preview__update"
                onClick={onUpdateClick}
                variantAction="secondary"
                aria-label="Следующий фильм"
              >
                <RiLoopRightLine className="movie-preview__update-svg" />
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="movie-preview__right">
        <img src={movie.posterUrl || defaultPoster} alt={movie.title} />
      </div>
      <Modal
        isOpen={isModalTrailerOpen}
        onClose={closeModalTrailer}
        children={<FetchMovieTrailer movieId={movie.id} />}
      />
    </div>
  );
};
