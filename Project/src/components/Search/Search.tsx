import { useEffect, useState, type ChangeEvent, type FC } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';
import { IoMdClose } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SearchListItem } from '../SearchListItem';
import { fetchMovieByTitle } from '../../api/movieApi';
import { DataLoader } from '../../UI/DataLoader';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import './Search.css';
import 'swiper/css';

interface SearchProps {
  showCloseIcon?: boolean;
  onClose?: VoidFunction;
}

export const Search: FC<SearchProps> = ({ showCloseIcon = false, onClose }) => {
  const [text, setText] = useState('');
  const [openList, setOpenList] = useState(false);
  const isMobile = useMediaQuery();

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

  const handleSearchClose = () => {
    if (onClose) {
      onClose();
    }
  };

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
        {showCloseIcon && (
          <IoMdClose
            className="search-close"
            onClick={handleSearchClose}
            aria-label="Закрыть поиск"
          />
        )}
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
              ) : isMobile ? (
                <div className="search__swiper-container">
                  <Swiper
                    slidesPerView={1.3}
                    spaceBetween={16}
                    initialSlide={0}
                    grabCursor={true}
                    cssMode={false}
                    className="search__swiper"
                  >
                    {searchMovie.map((movie) => (
                      <SwiperSlide key={movie.id}>
                        <li className="search-item" key={movie.id}>
                          <Link
                            className="search-item__link"
                            to={`/about/${movie.id}`}
                            onClick={handleSearchClose}
                          >
                            <SearchListItem movieSearch={movie} />
                          </Link>
                        </li>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : (
                searchMovie.map((movie) => (
                  <li className="search-item" key={movie.id}>
                    <Link
                      className="search-item__link"
                      to={`/about/${movie.id}`}
                      onClick={handleSearchClose}
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
