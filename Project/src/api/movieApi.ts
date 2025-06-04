import {
  RandomMovieSchema,
  TopMovieListSchema,
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
