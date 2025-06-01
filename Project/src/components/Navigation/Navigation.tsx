import type { FC } from 'react';
import './Navigation.css';

export const Navigation: FC = () => {
  return (
    <nav className="nav">
      <ul className="nav-list list-reset">
        <li className="nav-item text">
          <a className="nav-link" href="#">
            Главная
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text" href="#">
            Жанры
          </a>
        </li>
      </ul>
    </nav>
  );
};
