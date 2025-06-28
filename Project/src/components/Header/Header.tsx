import { useState, type FC, type JSX } from 'react';
import { RiApps2Line, RiUserLine } from 'react-icons/ri';
import { IoSearch } from 'react-icons/io5';

import { Logo } from '../../UI/Logo';
import { LoginButton } from '../LoginButton';
import { Navigation } from '../Navigation';
import { Search } from '../Search';
import { BREAKPOINTS, useMediaQuery } from '../../hooks/useMediaQuery';
import { MenuElement } from '../../UI/MenuElement';

import './Header.css';

interface HeaderProps {
  onLoginClick: VoidFunction;
  userName?: JSX.Element | null;
}

export const Header: FC<HeaderProps> = ({ onLoginClick, userName }) => {
  const isMobile = useMediaQuery(BREAKPOINTS.TABLET);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchOpen = () => {
    setShowSearch(true);
  };

  return (
    <header className="header-container">
      {isMobile ? (
        <>
          <Logo className="header-logo" color="white" />
          <nav className="header-nav__mobail" aria-label="Мобильная навигация">
            <MenuElement className="header-nav__mobail-genres" path={'/genres'}>
              <RiApps2Line
                className="header-nav__mobail-svg"
                aria-label="Открыть список жанров"
              />
            </MenuElement>
            <button
              className="header-nav__mobail-btn btn-reset"
              onClick={handleSearchOpen}
              aria-label="Открыть поиск"
            >
              <IoSearch className="header-nav__mobail-svg" aria-hidden="true" />
            </button>
            <button
              className="header-nav__mobail-btn btn-reset"
              onClick={onLoginClick}
              aria-label="Войти в аккаунт"
            >
              <RiUserLine
                className="header-nav__mobail-svg"
                aria-hidden="true"
              />
            </button>
          </nav>
          <div
            className={`mobile-search-overlay  ${
              showSearch ? 'mobile-search-overlay--visible' : ''
            }`}
          >
            {showSearch && (
              <Search
                showCloseIcon={true}
                onClose={() => setShowSearch(false)}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <Logo color="white" className="header-logo" />
          <Navigation />
          <Search />
          <LoginButton title={userName || 'Войти'} onClick={onLoginClick} />
        </>
      )}
    </header>
  );
};
