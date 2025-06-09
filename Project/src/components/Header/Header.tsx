import type { FC } from 'react';
import { Logo } from '../../UI/Logo';
import { LoginButton } from '../LoginButton';
import { Navigation } from '../Navigation';
import { Search } from '../Search';

import './Header.css';

interface HeaderProps {
  onLoginClick: VoidFunction;
}

export const Header: FC<HeaderProps> = ({ onLoginClick }) => {
  return (
    <header className="header-container">
      <Logo color="white" className="header-logo" />
      <Navigation />
      <Search />
      <LoginButton title={'Войти'} onClick={onLoginClick} />
    </header>
  );
};
