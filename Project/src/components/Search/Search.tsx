import { useEffect, useState, type ChangeEvent, type FC } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';

import { SearchListItem } from '../../SearchListItem';
import { fetchMovieByTitle } from '../../api/movieApi';
import { Link, useLocation } from 'react-router-dom';
import { DataLoader } from '../../UI/DataLoader';

import './Search.css';

export const Search: FC = () => {
  const [text, setText] = useState('');
  const [openList, setOpenList] = useState(false);

  const location = useLocation();

  const { data: searchMovie = [], status } = useQuery({
    queryFn: () => fetchMovieByTitle(text, 5),
    queryKey: ['searchTitle', text],
    retry: 1,
  });

  useEffect(() => {
    setOpenList(false);
    setText('');
  }, [location.pathname]);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const newText = e.target.value;
    setText(newText);

    if (newText.trim() !== '') {
      setOpenList(true);
    } else {
      setOpenList(false);
    }
  }

  return (
    <>
      <form className="search">
        <IoSearch className="search-svg" />
        <input
          className="search-input"
          type="text"
          placeholder="Поиск"
          value={text}
          onChange={handleInputChange}
        />
      </form>
      {openList && (
        <div className="search-block">
          {status === 'pending' && <DataLoader />}
          {status === 'error' && (
            <ul className="search-list list-reset">
              <li className="search-status">Ошибка поиска</li>
            </ul>
          )}
          {status === 'success' && (
            <ul className="search-list list-reset">
              {searchMovie.length === 0 ? (
                <li className="search-status">Ничего не найдено</li>
              ) : (
                searchMovie.map((movie) => (
                  <li className="search-item" key={movie.id}>
                    <Link
                      className="search-item__link"
                      to={`/about/${movie.id}`}
                    >
                      <SearchListItem movieSearch={movie} />
                    </Link>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      )}
    </>
  );
};
