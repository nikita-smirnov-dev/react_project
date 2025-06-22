import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MovieCard } from '../../UI/MovieCard';
import type { TopMovieList } from '../../types/movieTypes';
import { BREAKPOINTS, useMediaQuery } from '../../hooks/useMediaQuery';

import 'swiper/css';
import './MovieTopList.css';

interface MovieTopListProps {
  movieTopList: TopMovieList;
}

export const MovieTopList: FC<MovieTopListProps> = ({ movieTopList }) => {
  const isSmallMobile = useMediaQuery(BREAKPOINTS.SMALL_MOBILE);
  const isMobile = useMediaQuery(BREAKPOINTS.MOBILE);
  const isTablet = useMediaQuery(BREAKPOINTS.TABLET);
  const isDesktop = useMediaQuery(BREAKPOINTS.DESKTOP);

  return (
    <div className="top-movies">
      <h2 className="top-movies__title">Топ 10 фильмов</h2>
      {isSmallMobile ? (
        <div className="top-movies__swiper-container">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={40}
            initialSlide={0}
            grabCursor={true}
            cssMode={false}
            className="top-movies__swiper"
          >
            {movieTopList.map((movie, index) => (
              <SwiperSlide key={movie.id} style={{ width: '228px' }}>
                <Link to={`/about/${movie.id}`}>
                  <MovieCard movie={movie} index={index} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : isMobile ? (
        <div className="top-movies__swiper-container">
          <Swiper
            slidesPerView={2.2}
            spaceBetween={40}
            initialSlide={0}
            grabCursor={true}
            cssMode={false}
            className="top-movies__swiper"
          >
            {movieTopList.map((movie, index) => (
              <SwiperSlide key={movie.id} style={{ width: '228px' }}>
                <Link to={`/about/${movie.id}`}>
                  <MovieCard movie={movie} index={index} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : isTablet ? (
        <div>
          <Swiper
            slidesPerView={2.5}
            spaceBetween={40}
            initialSlide={0}
            grabCursor={true}
            cssMode={false}
          >
            {movieTopList.map((movie, index) => (
              <SwiperSlide key={movie.id} style={{ width: '228px' }}>
                <Link to={`/about/${movie.id}`}>
                  <MovieCard movie={movie} index={index} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : isDesktop ? (
        <div>
          <Swiper
            slidesPerView={3.5}
            spaceBetween={40}
            initialSlide={0}
            grabCursor={true}
            cssMode={false}
          >
            {movieTopList.map((movie, index) => (
              <SwiperSlide key={movie.id} style={{ width: '228px' }}>
                <Link to={`/about/${movie.id}`}>
                  <MovieCard movie={movie} index={index} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <ul className="top-movies__list list-reset">
          {movieTopList.map((movie, index) => (
            <li key={movie.id}>
              <Link to={`/about/${movie.id}`}>
                <MovieCard movie={movie} index={index} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
