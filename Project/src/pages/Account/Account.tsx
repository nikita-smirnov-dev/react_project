import { RiHeart3Line, RiUserLine } from 'react-icons/ri';
import { MenuElement } from '../../UI/MenuElement';
import './Account.css';
import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SettingAccount } from '../../components/SettingAccount';

interface AccountProps {
  userData: {
    name: string;
    surname: string;
    email: string;
  };
}

export const Account: FC<AccountProps> = ({ userData }) => {
  return (
    <div className="account">
      <h1 className="account-title section-title">Мой аккаунт</h1>

      <nav className="account-menu">
        <MenuElement title="Избранные фильмы" path="." end>
          <RiHeart3Line className="account-item__svg" />
        </MenuElement>
        <MenuElement title="Настройка аккаунта" path="setting">
          <RiUserLine className="account-item__svg" />
        </MenuElement>
      </nav>
      <Routes>
        <Route
          path="setting"
          element={<SettingAccount userData={userData} />}
        />
      </Routes>
    </div>
  );
};
