import type { FC, JSX } from 'react';
import { Logo } from '../../UI/Logo';
import { LoginButton } from '../LoginButton';
import { Navigation } from '../Navigation';
import { Search } from '../Search';

import './Header.css';

interface HeaderProps {
  onLoginClick: VoidFunction;
  userName?: JSX.Element | null;
}

export const Header: FC<HeaderProps> = ({ onLoginClick, userName }) => {
  return (
    <header className="header-container">
      <Logo color="white" className="header-logo" />
      <Navigation />
      <Search />
      <LoginButton title={userName || 'Войти'} onClick={onLoginClick} />
    </header>
  );
};
