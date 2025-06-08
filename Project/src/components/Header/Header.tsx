import type { FC } from 'react';
import { Logo } from '../../UI/Logo';
import { LoginButton } from '../LoginButton';
import { Navigation } from '../Navigation';
import { Search } from '../Search';

import './Header.css';

export const Header: FC = () => {
  return (
    <header className="header-container">
      <Logo color="white" className="header-logo" />
      <Navigation />
      <Search />
      <LoginButton title={'Войти'} />
    </header>
  );
};
