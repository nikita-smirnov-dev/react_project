import {
  GenreArraySchema,
  MovieByGenreSchema,
  RandomMovieSchema,
  TopMovieListSchema,
  type GenreArray,
  type MovieByGenre,
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
    // console.log('API response:', data);
    return MovieByGenreSchema.parse(data);
  } catch (error) {
    console.error('Top movies fetch error:', error);
    throw error;
  }
};
