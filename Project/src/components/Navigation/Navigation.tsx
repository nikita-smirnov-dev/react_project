import type { FC } from 'react';
import './Navigation.css';
import { MenuElement } from '../../UI/MenuElement';

export const Navigation: FC = () => {
  return (
    <nav className="nav">
      <ul className="nav-list list-reset">
        <li className="nav-item ">
          <MenuElement title="Главная" path={'/'} end />
        </li>
        <li className="nav-item">
          <MenuElement title="Жанры" path={'/genres'} />
        </li>
      </ul>
    </nav>
  );
};
