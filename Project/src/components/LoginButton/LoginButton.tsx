import type { FC } from 'react';
import './LoginButton.css';

interface LoginButtonProps {
  title: string;
  onClick: VoidFunction;
}

export const LoginButton: FC<LoginButtonProps> = ({ title, onClick }) => {
  return (
    <button className="btn-login btn-reset text" onClick={onClick}>
      {title}
    </button>
  );
};
