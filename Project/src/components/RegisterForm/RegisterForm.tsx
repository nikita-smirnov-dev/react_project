import type { FC } from 'react';
import { Logo } from '../../UI/Logo';
import { FormField } from '../../UI/FormField';
import { Button } from '../../UI/Button';
import { Input } from '../../UI/Input';
import { RiKeyLine, RiMailSendLine, RiUserLine } from 'react-icons/ri';

import './RegisterForm.css';

export const RegisterForm: FC = () => {
  return (
    <div className="modal">
      <Logo className="modal-logo" color="dark" isLink={false} />
      <h3 className="modal-title">Регистрация</h3>
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
          <FormField label="Имя">
            <Input className="modal-form__input" type="text" placeholder="Имя">
              <RiUserLine className="modal__form-svg" />
            </Input>
          </FormField>
          <FormField label="Фамилия">
            <Input
              className="modal-form__input"
              type="text"
              placeholder="Фамилия"
            >
              <RiUserLine className="modal__form-svg" />
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
          <FormField label="Подтвердите пароль">
            <Input
              className="modal-form__input"
              type="password"
              placeholder="Подтвердите пароль"
            >
              <RiKeyLine className="modal__form-svg" />
            </Input>
          </FormField>
        </div>
        <Button className="modal-form__btn">Создать аккаунт</Button>
      </form>
      <Button className="modal-btn">У меня есть пароль</Button>
    </div>
  );
};
