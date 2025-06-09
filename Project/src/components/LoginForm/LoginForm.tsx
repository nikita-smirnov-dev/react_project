import type { FC } from 'react';
import { Button } from '../../UI/Button';
import { FormField } from '../../UI/FormField';
import { Input } from '../../UI/Input';
import { RiKeyLine, RiMailSendLine } from 'react-icons/ri';
import { Logo } from '../../UI/Logo';

import './LoginForm.css';

interface LoginProps {
  onRegisterClick: VoidFunction;
}

export const LoginForm: FC<LoginProps> = ({ onRegisterClick }) => {
  return (
    <div className="modal">
      <Logo className="modal-logo" color="dark" isLink={false} />
      <form className="modal-form">
        <div className="modal-form__field">
          <FormField label="Email">
            <Input
              className="modal-form__input"
              type="email"
              placeholder="Электронная почта"
            >
              <RiMailSendLine className="modal__form-svg" />
            </Input>
          </FormField>
          <FormField label="Пароль">
            <Input
              className="modal-form__input"
              type="password"
              placeholder="Пароль"
            >
              <RiKeyLine className="modal__form-svg" />
            </Input>
          </FormField>
        </div>
        <Button className="modal-form__btn" type="submit">
          Войти
        </Button>
      </form>
      <Button className="modal-btn" onClick={onRegisterClick}>
        Регистрация
      </Button>
    </div>
  );
};
