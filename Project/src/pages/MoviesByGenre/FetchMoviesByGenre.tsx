import { useQuery } from '@tanstack/react-query';
import { useEffect, useState, type FC } from 'react';
import { DataLoader } from '../../UI/DataLoader';
import { ErrorMessage } from '../../UI/ErrorMessage';
import { MoviesByGenre } from './MoviesByGenre';
import { fetchMoviesByGenre } from '../../api/movieApi';
import type { MovieByGenre } from '../../types/movieTypes';
import { useParams } from 'react-router-dom';

export const FetchMoviesByGenre: FC = () => {
  const count = 10;
  const [page, setPage] = useState(1);
  const [allMovies, setAllMovies] = useState<MovieByGenre>([]);
  const { genreSlug } = useParams();
  console.log(genreSlug);

  const genre = genreSlug ?? '';

  const { data, status, refetch } = useQuery({
    queryFn: () => fetchMoviesByGenre(genre, count, page),
    queryKey: ['moviesByGenre', genre, page, count],
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
