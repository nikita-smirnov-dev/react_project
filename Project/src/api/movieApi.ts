import {
  BaseMovieSchema,
  FavoritesMoviesSchema,
  FavoriteToMovieSchema,
  GenreArraySchema,
  MovieByGenreSchema,
  MovieSearchListSchema,
  MovieVideoTrailerSchema,
  RandomMovieSchema,
  TopMovieListSchema,
  type DetailsMovie,
  type FavoritesMovies,
  type FavoriteToMovie,
  type GenreArray,
  type MovieByGenre,
  type MovieSearchList,
  type MovieVideoTrailer,
  type RandomMovie,
  type TopMovieList,
} from '../types/movieTypes';
import { API_BASE_URL, endpoints } from './config';

export const fetchRandomMovie = async (): Promise<RandomMovie> => {
  // return fetch(`${API_BASE_URL}${endpoints.randomMovie}`)
  //   .then((res) => res.json())
  //   .then((data) => RandomMovieSchema.parse(data));
  try {
    const response = await fetch(`${API_BASE_URL}${endpoints.randomMovie}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return RandomMovieSchema.parse(data);
  } catch (error) {
    console.error('Random movies fetch error:', error);
    throw error;
  }
};

export const fetchTopMovie = async (): Promise<TopMovieList> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoints.topMovie}`);
    const data = await response.json();
    // console.log('API response:', data);
    return TopMovieListSchema.parse(data);
  } catch (error) {
    console.error('Top movies fetch error:', error);
    throw error;
  }
};

export const fetchMovieGenres = async (): Promise<GenreArray> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoints.genresMovie}`);
    const data = await response.json();
    return GenreArraySchema.parse(data);
  } catch (error) {
    console.error('Genres movies fetch error:', error);
    throw error;
  }
};
export const fetchMoviesByGenre = async (
  genreSlug: string,
  count: number,
  page: number
): Promise<MovieByGenre> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}${endpoints.movie}?genre=${genreSlug}&count=${count}&page=${page}`
    );
    const data = await response.json();
    return MovieByGenreSchema.parse(data);
  } catch (error) {
    console.error('Movie be genres movies fetch error:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (id: number): Promise<DetailsMovie> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoints.movie}/${id}`);
    const data = await response.json();
    return BaseMovieSchema.parse(data);
  } catch (error) {
    console.error('Movie dateils fetch error:', error);
    throw error;
  }
};

export const fetchMovieByTitle = async (
  title: string,
  count: number
): Promise<MovieSearchList> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}${endpoints.movie}?title=${title}&count=${count}`
    );
    const data = await response.json();
    return MovieSearchListSchema.parse(data);
  } catch (error) {
    console.error('Title movies fetch error:', error);
    throw error;
  }
};

export const fetchFavoritesMovies = async (): Promise<FavoritesMovies> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoints.favorites}`, {
      credentials: 'include',
    });
    const data = await response.json();
    // console.log('API response:', data);
    return FavoritesMoviesSchema.parse(data);
  } catch (error) {
    console.error('Favorites movies fetch error:', error);
    throw error;
  }
};

export const fetchAddFavoriteMovie = async (
  movieId: number
): Promise<FavoriteToMovie> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoints.favorites}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: movieId.toString() }),
    });

    const data = await response.json();
    return FavoriteToMovieSchema.parse(data);
  } catch (error) {
    console.error('Add favorite movie fetch error:', error);
    throw error;
  }
};

export const fetchDeleteFavoriteMovie = async (
  movieId: number
): Promise<FavoriteToMovie> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}${endpoints.favorites}/${movieId}`,
      {
        method: 'DELETE',
        credentials: 'include',
      }
    );
    const data = await response.json();
    return FavoriteToMovieSchema.parse(data);
  } catch (error) {
    console.error('Delete favorite movie fetch error:', error);
    throw error;
  }
};

export const fetchMovieVideoTrailer = async (
  id: number
): Promise<MovieVideoTrailer> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoints.movie}/${id}`);
    const data = await response.json();

    return MovieVideoTrailerSchema.parse(data);
  } catch (error) {
    console.error('Trailer movie fetch error:', error);
    throw error;
  }
};
