import { z } from 'zod';

// Base Movie schema

export const BaseMovieSchema = z.object({
  id: z.number(),
  tmdbRating: z.number(),
  releaseYear: z.number(),
  genres: z.array(z.string()),
  runtime: z.number(),
  title: z.string(),
  plot: z.string(),
  posterUrl: z.string().nullable(),
  director: z.string().nullable(),
  production: z.string().nullable().optional(),
  language: z.string().nullable().optional(),
  budget: z.string().nullable().optional(),
  revenue: z.string().nullable().optional(),
  awardsSummary: z.string().nullable().optional(),
  trailerUrl: z.string(),
  trailerYouTubeId: z.string(),
});

// Random movie schema

export const RandomMovieSchema = BaseMovieSchema.pick({
  id: true,
  tmdbRating: true,
  releaseYear: true,
  genres: true,
  runtime: true,
  title: true,
  plot: true,
  posterUrl: true,
});

export type RandomMovie = z.infer<typeof RandomMovieSchema>;

// Top movie schema

export const TopMovieSchema = BaseMovieSchema.pick({
  id: true,
  title: true,
  posterUrl: true,
  tmdbRating: true,
})
  .partial()
  .extend({
    posterUrl: z.string().nullish().default('/default-img.jpg'),
  });

export type TopMovie = z.infer<typeof TopMovieSchema>;

export const TopMovieListSchema = z.array(TopMovieSchema);

export type TopMovieList = z.infer<typeof TopMovieListSchema>;

// Genre schema

export const GenreArraySchema = z.array(z.string());

export type GenreArray = z.infer<typeof GenreArraySchema>;

export const MovieGenreSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  image: z.string(),
});

export type MovieGenre = z.infer<typeof MovieGenreSchema>;

// Movie by genre schema

export const MovieByGenreSchema = z.array(
  BaseMovieSchema.pick({
    id: true,
    genres: true,
    posterUrl: true,
  })
);

export type MovieByGenre = z.infer<typeof MovieByGenreSchema>;

// Details movie schema

export type DetailsMovie = z.infer<typeof BaseMovieSchema>;

// Search item schema

export const MovieSearchByTitleSchema = BaseMovieSchema.pick({
  id: true,
  posterUrl: true,
  releaseYear: true,
  tmdbRating: true,
  genres: true,
  runtime: true,
  title: true,
});

export type MovieSearchByTitle = z.infer<typeof MovieSearchByTitleSchema>;

// Search title schema

export const MovieSearchListSchema = z.array(MovieSearchByTitleSchema);

export type MovieSearchList = z.infer<typeof MovieSearchListSchema>;
