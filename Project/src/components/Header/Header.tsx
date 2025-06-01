import type { FC } from 'react';
import { Logo } from '../../UI/Logo';
import { LoginButton } from '../LoginButton';
import { Navigation } from '../Navigation';
import { Search } from '../Search';

import './Header.css';

export const Header: FC = () => {
  return (
    <header className="header-container">
      <Logo />
      <Navigation />
      <Search />
      <LoginButton title={'Войти'} />
    </header>
  );
};
