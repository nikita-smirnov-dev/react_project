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
          <nav className="header-nav__mobail">
            <MenuElement className="header-nav__mobail-genres" path={'/genres'}>
              <RiApps2Line className="header-nav__mobail-svg" />
            </MenuElement>
            <IoSearch
              className="header-nav__mobail-svg "
              onClick={handleSearchOpen}
            />
            <RiUserLine
              className="header-nav__mobail-svg"
              onClick={onLoginClick}
            />
          </nav>
          {showSearch && (
            <Search showCloseIcon={true} onClose={() => setShowSearch(false)} />
          )}
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
