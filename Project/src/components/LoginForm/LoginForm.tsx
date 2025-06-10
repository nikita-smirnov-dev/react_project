import type { FC } from 'react';
import { RiKeyLine, RiMailSendLine } from 'react-icons/ri';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { Button } from '../../UI/Button';
import { FormField } from '../../UI/FormField';
import { Input } from '../../UI/Input';
import { Logo } from '../../UI/Logo';
import { login } from '../../api/userApi';
import { queryClient } from '../../api/queryClient';

import './LoginForm.css';

const CreateLoginSchema = z.object({
  email: z
    .string()
    .nonempty('Email обязателен')
    .email('Email должен содержать корректный формат электронной почты'),
  password: z
    .string()
    .nonempty('Пароль обязателен')
    .min(8, 'Длинна пароля должна быть не менее 8 символов'),
});

type CreateLoginForm = z.infer<typeof CreateLoginSchema>;

interface LoginProps {
  onRegisterClick: VoidFunction;
  onLoginSuccess: VoidFunction;
}

export const LoginForm: FC<LoginProps> = ({
  onRegisterClick,
  onLoginSuccess,
}) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateLoginForm>({
    mode: 'onBlur',
    resolver: zodResolver(CreateLoginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      login(data.email, data.password),
    onSuccess() {
      localStorage.setItem('isAuth', 'true');
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      onLoginSuccess();
      navigate('/account');
    },
  });

  return (
    <div className="modal">
      <Logo className="modal-logo" color="dark" isLink={false} />
      <form
        className="modal-form"
        onSubmit={handleSubmit(({ email, password }) => {
          loginMutation.mutate({ email, password });
        })}
      >
        <div className="modal-form__field">
          <FormField label="Email" errorMessage={errors.email?.message}>
            <Input
              className="modal-form__input"
              type="email"
              placeholder="Электронная почта"
              {...register('email')}
            >
              <RiMailSendLine className="modal__form-svg" />
            </Input>
          </FormField>
          <FormField label="Пароль" errorMessage={errors.password?.message}>
            <Input
              className="modal-form__input"
              type="password"
              placeholder="Пароль"
              {...register('password')}
            >
              <RiKeyLine className="modal__form-svg" />
            </Input>
          </FormField>
          {loginMutation.error && <span>{loginMutation.error.message}</span>}
        </div>
        <Button
          className="modal-form__btn"
          type="submit"
          isLoading={loginMutation.isPending}
        >
          Войти
        </Button>
      </form>
      <Button className="modal-btn" onClick={onRegisterClick}>
        Регистрация
      </Button>
    </div>
  );
};
