import { useQuery } from '@tanstack/react-query';

import { GenreCard } from '../../components/GenreCard';
import { fetchMovieGenres } from '../../api/movieApi';
import type { MovieGenre } from '../../types/movieTypes';
import { genreTranslations } from '../../assets/data/genreTranslations';
import { genreImage } from '../../assets/data/genresImage';
import { DataLoader } from '../../UI/DataLoader';
import { ErrorMessage } from '../../UI/ErrorMessage';

import './Genres.css';
import { Link } from 'react-router-dom';

export const Genres = () => {
  const {
    data: genres = [],
    status,
    refetch,
  } = useQuery({
    queryFn: async () => {
      const genreList = await fetchMovieGenres();
      return genreList.map(
        (genreName): MovieGenre => ({
          id: genreName,
          slug: genreName,
          title: genreTranslations[genreName] || genreName,
          image: genreImage[genreName],
        })
      );
    },
    queryKey: ['genresMovie'],
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
          <section className="genres">
            <h1 className="genres__title section-title">Жанры фильмов</h1>
            <ul className="genres__list list-reset">
              {genres.map((genre) => (
                <li key={genre.slug}>
                  <Link to={genre.slug}>
                    <GenreCard genreMovie={genre} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>
      );
    case 'error':
      return (
        <ErrorMessage
          message="Не удалось загрузить жанры фильмов!"
          onClick={() => refetch()}
        />
      );
  }
};
