import type { FC } from 'react';

import type { FavoritesMovies } from '../../types/movieTypes';
import { MovieCard } from '../../UI/MovieCard';
import { useFavoriteMovieActions } from '../../hooks/useFavoriteMovieActions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BREAKPOINTS, useMediaQuery } from '../../hooks/useMediaQuery';

import './FavoritesMoviesList.css';
import 'swiper/css';

interface FavoritesMoviesProps {
  moviesFavorites: FavoritesMovies;
}

export const FavoritesMoviesList: FC<FavoritesMoviesProps> = ({
  moviesFavorites,
}) => {
  const { deleteFavoriteMutation } = useFavoriteMovieActions();
  const isSmallMobile = useMediaQuery(BREAKPOINTS.SMALL_MOBILE);
  const isMobile = useMediaQuery(BREAKPOINTS.MOBILE);
  const isTablet = useMediaQuery(BREAKPOINTS.TABLET);

  const deleteFavoriteMovieCard = (favorite: FavoritesMovies[0]) => {
    deleteFavoriteMutation.mutate(Number(favorite.id));
  };

  return (
    <div className="favorites-movies">
      {!moviesFavorites.length && (
        <h2 className="favorites-movies__title">
          У вас пока нет избранных фильмов
        </h2>
      )}
      {isSmallMobile ? (
        <div className="favorites-movies__swiper-container">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={40}
            initialSlide={0}
            grabCursor={true}
            cssMode={false}
            className="favorites-movies__swiper"
          >
            {moviesFavorites.map((favorite) => (
              <SwiperSlide key={favorite.id}>
                <MovieCard
                  movie={favorite}
                  hideRaiting={true}
                  hideCloseButton={false}
                  onDeleteCard={() => deleteFavoriteMovieCard(favorite)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : isMobile ? (
        <div className="favorites-movies__swiper-container">
          <Swiper
            slidesPerView={2.2}
            spaceBetween={40}
            initialSlide={0}
            grabCursor={true}
            cssMode={false}
            className="favorites-movies__swiper"
          >
            {moviesFavorites.map((favorite) => (
              <SwiperSlide key={favorite.id}>
                <MovieCard
                  movie={favorite}
                  hideRaiting={true}
                  hideCloseButton={false}
                  onDeleteCard={() => deleteFavoriteMovieCard(favorite)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : isTablet ? (
        <div className="favorites-movies__swiper-container">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={40}
            initialSlide={0}
            grabCursor={true}
            cssMode={false}
            className="favorites-movies__swiper"
          >
            {moviesFavorites.map((favorite) => (
              <SwiperSlide key={favorite.id}>
                <MovieCard
                  movie={favorite}
                  hideRaiting={true}
                  hideCloseButton={false}
                  onDeleteCard={() => deleteFavoriteMovieCard(favorite)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
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
      )}
    </div>
  );
};
