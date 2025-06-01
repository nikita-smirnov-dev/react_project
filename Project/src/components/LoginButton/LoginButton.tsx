import type { FC } from 'react';
import './LoginButton.css';

interface LoginButtonProps {
  title: string;
}

export const LoginButton: FC<LoginButtonProps> = ({ title }) => {
  return <button className="btn-login btn-reset text">{title}</button>;
};
