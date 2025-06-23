import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DataLoader } from '../../UI/DataLoader';
import { ErrorMessage } from '../../UI/ErrorMessage';
import { MoviesByGenre } from './MoviesByGenre';
import { fetchMoviesByGenre } from '../../api/movieApi';
import type { MovieByGenre } from '../../types/movieTypes';
import { BREAKPOINTS, useMediaQuery } from '../../hooks/useMediaQuery';

export const FetchMoviesByGenre = () => {
  let count = 10;
  const [page, setPage] = useState(1);
  const [allMovies, setAllMovies] = useState<MovieByGenre>([]);
  const { genreSlug } = useParams();

  const isDesktop = useMediaQuery(BREAKPOINTS.DESKTOP);
  const isTablet = useMediaQuery(BREAKPOINTS.TABLET);

  if (isDesktop) {
    count = 12;
  }
  if (isTablet) {
    count = 9;
  }

  const genre = genreSlug ?? '';

  const { data, status, refetch } = useQuery({
    queryFn: () => fetchMoviesByGenre(genre, count, page),
    queryKey: ['moviesByGenre', genre, page, count],
    placeholderData: (previousData) => previousData,
    staleTime: 5 * 60 * 1000, // 5 минут
  });

  useEffect(() => {
    setAllMovies([]);
    setPage(1);
  }, [genre]);

  useEffect(() => {
    if (data) {
      setAllMovies((prev) => [...prev, ...data]);
    }
  }, [data]);

  const onloadMore = () => {
    setPage((prev) => prev + 1);
  };

  switch (status) {
    case 'pending':
      return (
        <>
          <DataLoader />
        </>
      );
    case 'success':
      return (
        <MoviesByGenre movieListByGenre={allMovies} onloadMore={onloadMore} />
      );
    case 'error':
      return (
        <ErrorMessage
          message="Не удалось загрузить список фильмов по жанрам!"
          onClick={() => refetch()}
        />
      );
  }
};

export default FetchMoviesByGenre;
