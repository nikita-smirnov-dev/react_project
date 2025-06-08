import type { FC } from 'react';
import { Logo } from '../../UI/Logo';
import { Button } from '../../UI/Button';

import './RegisterSuccess.css';

export const RegisterSuccess: FC = () => {
  return (
    <div className="modal">
      <Logo className="modal-logo" color="dark" isLink={false} />
      <h3 className="modal-title">Регистрация завершена</h3>
      <p className="modal-text">Используйте вашу электронную почту для входа</p>
      <Button className="modal-form__btn">Войти</Button>
    </div>
  );
};
