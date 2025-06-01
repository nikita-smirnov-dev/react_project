import type { FC } from 'react';
import { IoSearch } from 'react-icons/io5';

import './Search.css';

export const Search: FC = () => {
  return (
    <form className="search">
      <IoSearch className="search-svg" />
      <input className="search-input" type="text" placeholder="Поиск" />
    </form>
  );
};
