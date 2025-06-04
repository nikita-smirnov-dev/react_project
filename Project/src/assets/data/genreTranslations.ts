type GenreTranslationsType = {
  [key: string]: string;
};

export const genreTranslations: GenreTranslationsType = {
  history: 'История',
  horror: 'Ужасы',
  scifi: 'Фантастика',
  'stand-up': 'Стендап',
  fantasy: 'Фэнтези',
  drama: 'Драма',
  mystery: 'Детектив',
  family: 'Семейное',
  comedy: 'Комедия',
  romance: 'Мелодрама',
  music: 'Музыка',
  crime: 'Криминал',
  'tv-movie': 'ТВ фильм',
  documentary: 'Документальный',
  action: 'Боевик',
  thriller: 'Триллер',
  western: 'Вестерн',
  animation: 'Мультфильм',
  war: 'Военный',
  adventure: 'Приключения',
} as const;
