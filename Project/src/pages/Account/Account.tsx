import type { FC } from 'react';
import { RiHeart3Line, RiUserLine } from 'react-icons/ri';
import { Route, Routes } from 'react-router-dom';

import { MenuElement } from '../../UI/MenuElement';
import { SettingAccount } from '../../components/SettingAccount';
import { FetchFavoritesMoviesList } from '../../components/FavoritesMoviesList';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import './Account.css';

interface AccountProps {
  userData: {
    name: string;
    surname: string;
    email: string;
  };
}

export const Account: FC<AccountProps> = ({ userData }) => {
  const isMobile = useMediaQuery();

  return (
    <div className="account">
      <h1 className="account-title section-title">Мой аккаунт</h1>
      {isMobile ? (
        <nav className="account-menu" aria-label="Меню аккаунта">
          <MenuElement title="Избранное" path="." end>
            <RiHeart3Line className="account-item__svg" aria-hidden="true" />
          </MenuElement>
          <MenuElement title="Настройки" path="setting">
            <RiUserLine className="account-item__svg" aria-hidden="true" />
          </MenuElement>
        </nav>
      ) : (
        <nav className="account-menu" aria-label="Меню аккаунта">
          <MenuElement title="Избранные фильмы" path="." end>
            <RiHeart3Line className="account-item__svg" aria-hidden="true" />
          </MenuElement>
          <MenuElement title="Настройка аккаунта" path="setting">
            <RiUserLine className="account-item__svg" aria-hidden="true" />
          </MenuElement>
        </nav>
      )}

      <Routes>
        <Route index element={<FetchFavoritesMoviesList />} />
        <Route
          path="setting"
          element={<SettingAccount userData={userData} />}
        />
      </Routes>
    </div>
  );
};
