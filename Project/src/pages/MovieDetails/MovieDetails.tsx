import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { MoviePreview } from '../../components/MoviePreview';
import { AboutMovie } from '../../components/AboutMovie';
import { fetchMovieDetails } from '../../api/movieApi';
import { DataLoader } from '../../UI/DataLoader';
import { ErrorMessage } from '../../UI/ErrorMessage';

import './MovieDetails.css';

export const MovieDetails: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, status, refetch } = useQuery({
    queryFn: () => {
      if (!id) throw new Error('Идентификатор не обнаружен');
      return fetchMovieDetails(Number(id));
    },
    queryKey: ['movie', id],
    enabled: !!id,
  });

  switch (status) {
    case 'pending':
      return (
        <>
          <DataLoader />
        </>
      );
    case 'success':
      return (
        <main>
          <section>
            <MoviePreview
              movie={data}
              showFilmButton={false}
              showUpdateButton={false}
              isDetailsPage={true}
            />
          </section>
          <section>
            <AboutMovie movieInfo={data} />
          </section>
        </main>
      );
    case 'error':
      return (
        <>
          <ErrorMessage
            message="Не удалось загрузить информацию о фильме!"
            onClick={() => refetch()}
          />
        </>
      );
  }
};

export default MovieDetails;
