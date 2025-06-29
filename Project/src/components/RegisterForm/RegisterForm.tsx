import { useState, type FC } from 'react';
import { RiKeyLine, RiMailSendLine, RiUserLine } from 'react-icons/ri';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { queryClient } from '../../api/queryClient';
import { Logo } from '../../UI/Logo';
import { FormField } from '../../UI/FormField';
import { Button } from '../../UI/Button';
import { Input } from '../../UI/Input';
import { registerUser } from '../../api/userApi';
import { RegisterSuccess } from '../RegisterSuccess';

import './RegisterForm.css';

const CreateRegisterSchema = z
  .object({
    name: z
      .string()
      .nonempty('Имя обязательно')
      .min(2, 'Имя должно содержать минимум 2 символа')
      .max(50, 'Имя не должно превышать 50 символов')
      .regex(
        /^[а-яА-ЯёЁa-zA-Z\s-]+$/,
        'Имя может содержать только буквы, пробел и дефис'
      ),
    surname: z
      .string()
      .nonempty('Фамилия обязательна')
      .min(2, 'Фамилия должна содержать минимум 2 символа')
      .max(50, 'Фамилия не должна превышать 50 символов')
      .regex(
        /^[а-яА-ЯёЁa-zA-Z\s-]+$/,
        'Фамилия может содержать только буквы, пробел и дефис'
      ),
    email: z
      .string()
      .nonempty('Email обязателен')
      .email('Email должен содержать корректный формат электронной почты'),
    password: z
      .string()
      .nonempty('Пароль обязателен')
      .min(8, 'Длинна пароля должна быть не менее 8 символов'),
    confirmPassword: z.string().nonempty('Подтверждение пароля обязательно'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

type CreateRegisterForm = z.infer<typeof CreateRegisterSchema>;

interface RegisterProps {
  onLoginClick: VoidFunction;
}

export const RegisterForm: FC<RegisterProps> = ({ onLoginClick }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateRegisterForm>({
    mode: 'onBlur',
    resolver: zodResolver(CreateRegisterSchema),
  });

  const [successRegister, setSuccessRegister] = useState(false);

  const registerMutation = useMutation({
    mutationFn: (data: {
      name: string;
      surname: string;
      email: string;
      password: string;
    }) => registerUser(data.name, data.surname, data.email, data.password),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      setSuccessRegister(true);
    },
    onError(error) {
      console.log('Registration error:', error);
    },
  });

  return (
    <div className="modal">
      {successRegister ? (
        <RegisterSuccess onLoginClick={onLoginClick} />
      ) : (
        <>
          <Logo className="modal-logo" color="dark" isLink={false} />
          <h3 className="modal-title">Регистрация</h3>
          <form
            className="modal-form"
            onSubmit={handleSubmit(({ name, surname, email, password }) => {
              registerMutation.mutate({ name, surname, email, password });
              reset();
            })}
          >
            <div className="modal-form__field">
              <FormField label="Email" errorMessage={errors.email?.message}>
                <Input
                  className="modal-form__input"
                  type="email"
                  placeholder="Электронная почта"
                  {...register('email')}
                  error={errors.email}
                >
                  <RiMailSendLine className="modal__form-svg" />
                </Input>
              </FormField>
              <FormField label="Имя" errorMessage={errors.name?.message}>
                <Input
                  className="modal-form__input"
                  type="text"
                  placeholder="Имя"
                  {...register('name')}
                  error={errors.name}
                >
                  <RiUserLine className="modal__form-svg" />
                </Input>
              </FormField>
              <FormField label="Фамилия" errorMessage={errors.surname?.message}>
                <Input
                  className="modal-form__input"
                  type="text"
                  placeholder="Фамилия"
                  {...register('surname')}
                  error={errors.surname}
                >
                  <RiUserLine className="modal__form-svg" />
                </Input>
              </FormField>
              <FormField label="Пароль" errorMessage={errors.password?.message}>
                <Input
                  className="modal-form__input"
                  type="password"
                  placeholder="Пароль"
                  {...register('password')}
                  error={errors.password}
                >
                  <RiKeyLine className="modal__form-svg" />
                </Input>
              </FormField>
              <FormField
                label="Подтвердите пароль"
                errorMessage={errors.confirmPassword?.message}
              >
                <Input
                  className="modal-form__input"
                  type="password"
                  placeholder="Подтвердите пароль"
                  {...register('confirmPassword')}
                  error={errors.confirmPassword}
                >
                  <RiKeyLine className="modal__form-svg" />
                </Input>
              </FormField>
              {registerMutation.error && (
                <span>{registerMutation.error.message}</span>
              )}
            </div>
            <Button
              className="modal-form__btn"
              isLoading={registerMutation.isPending}
              type="submit"
            >
              Создать аккаунт
            </Button>
          </form>
          <Button className="modal-btn" onClick={onLoginClick}>
            У меня есть пароль
          </Button>
        </>
      )}
    </div>
  );
};
