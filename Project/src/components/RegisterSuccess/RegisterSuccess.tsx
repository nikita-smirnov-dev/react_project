import type { FC } from 'react';

import { Logo } from '../../UI/Logo';
import { Button } from '../../UI/Button';

import './RegisterSuccess.css';

interface RegisterSuccessProps {
  onLoginClick?: VoidFunction;
}

export const RegisterSuccess: FC<RegisterSuccessProps> = ({ onLoginClick }) => {
  return (
    <div className="modal">
      <Logo className="modal-logo" color="dark" isLink={false} />
      <h3 className="modal-title">Регистрация завершена</h3>
      <p className="modal-text">Используйте вашу электронную почту для входа</p>
      <Button className="modal-form__btn" onClick={onLoginClick}>
        Войти
      </Button>
    </div>
  );
};
