import { z } from 'zod';
import history from '../images/genres/history.webp';
import horror from '../images/genres/horror.webp';
import scifi from '../images/genres/scifi.webp';
import standup from '../images/genres/standup.webp';
import fantasy from '../images/genres/fantasy.webp';
import drama from '../images/genres/drama.webp';
import mystery from '../images/genres/mystery.webp';
import family from '../images/genres/family.webp';
import comedy from '../images/genres/comedy.webp';
import romance from '../images/genres/romance.webp';
import music from '../images/genres/music.webp';
import crime from '../images/genres/crime.webp';
import tvmovie from '../images/genres/tvmovie.webp';
import documentary from '../images/genres/documentary.webp';
import action from '../images/genres/action.webp';
import thriller from '../images/genres/thriller.webp';
import western from '../images/genres/western.webp';
import animation from '../images/genres/animation.webp';
import war from '../images/genres/war.webp';
import adventure from '../images/genres/adventure.webp';

export const GenresImageSchema = z.record(z.string(), z.string());

export const genreImage: GenresImageObj = {
  history,
  horror,
  scifi,
  'stand-up': standup,
  fantasy,
  drama,
  mystery,
  family,
  comedy,
  romance,
  music,
  crime,
  'tv-movie': tvmovie,
  documentary,
  action,
  thriller,
  western,
  animation,
  war,
  adventure,
} as const;

export type GenresImageObj = z.infer<typeof GenresImageSchema>;
