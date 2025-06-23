import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '../../UI/PageLoader';
import MainLayout from '../../layout/MainLayout';

const LazyHomePage = lazy(() => import('../../pages/Home/Home'));
const LazyGenresPage = lazy(() => import('../../pages/Genres/Genres'));
const LazyMoviesByGenresPage = lazy(
  () => import('../../pages/MoviesByGenre/FetchMoviesByGenre')
);
const LazyMovieDetails = lazy(
  () => import('../../pages/MovieDetails/MovieDetails')
);
const LazyAccountPage = lazy(() => import('../../pages/Account/FetchAccount'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <LazyHomePage />
            </Suspense>
          }
        />
        <Route path="genres">
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <LazyGenresPage />
              </Suspense>
            }
          />
          <Route
            path=":genreSlug"
            element={
              <Suspense fallback={<PageLoader />}>
                <LazyMoviesByGenresPage />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="about/:id"
          element={
            <Suspense fallback={<PageLoader />}>
              <LazyMovieDetails />
            </Suspense>
          }
        />
        <Route
          path="account/*"
          element={
            <Suspense fallback={<PageLoader />}>
              <LazyAccountPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
