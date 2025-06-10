import type { FC } from 'react';
import './SettingAccount.css';
import { RiMailSendLine } from 'react-icons/ri';
import { LogoutButton } from '../LogoutButton';

interface SettingAccountProps {
  userData: {
    email: string;
    name: string;
    surname: string;
  };
}

type UserInitials = Pick<SettingAccountProps['userData'], 'name' | 'surname'>;

const getInitials = (userData: UserInitials): string => {
  return `${userData.name.charAt(0)}${userData.surname.charAt(
    0
  )}`.toUpperCase();
};

export const SettingAccount: FC<SettingAccountProps> = ({ userData }) => {
  return (
    <div className="setting-account">
      <div className="setting-account__content">
        <div className="setting-account__avatar">{getInitials(userData)}</div>
        <div className="setting-account__info">
          <p className="setting-account__text">Имя Фамилия</p>
          <span className="setting-account__fio">
            {userData.name} {userData.surname}
          </span>
        </div>
      </div>
      <div className="setting-account__content">
        <div className="setting-account__avatar">
          <RiMailSendLine className="setting-account__avatar-svg" />
        </div>
        <div className="setting-account__info">
          <p className="setting-account__text">Электронная почта</p>
          <span className="setting-account__fio">{userData.email}</span>
        </div>
      </div>
      <LogoutButton />
    </div>
  );
};
