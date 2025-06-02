import { GenreCard } from '../../components/GenreCard';
import './Genres.css';

export const Genres = () => {
  return (
    <main>
      <section className="genres">
        <h1 className="genres__title section-title">Жанры фильмов</h1>
        <ul className="genres__list list-reset">
          <li>
            <GenreCard />
          </li>
          <li>
            <GenreCard />
          </li>
          <li>
            <GenreCard />
          </li>
          <li>
            <GenreCard />
          </li>
          <li>
            <GenreCard />
          </li>
          <li>
            <GenreCard />
          </li>
          <li>
            <GenreCard />
          </li>
          <li>
            <GenreCard />
          </li>
        </ul>
      </section>
    </main>
  );
};
