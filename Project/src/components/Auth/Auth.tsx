import { useState, type FC } from 'react';

import { LoginForm } from '../LoginForm';
import { RegisterForm } from '../RegisterForm';
import { RegisterSuccess } from '../RegisterSuccess';

import './Auth.css';

type AuthForm = 'login' | 'register' | 'success';

interface AuthProps {
  closeModal: VoidFunction;
}

export const Auth: FC<AuthProps> = ({ closeModal }) => {
  const [currentForm, setCurrentForm] = useState<AuthForm | never>('login');

  const renderAuthForm = () => {
    switch (currentForm) {
      case 'login':
        return (
          <LoginForm
            onRegisterClick={() => setCurrentForm('register')}
            onLoginSuccess={closeModal}
          />
        );
      case 'register':
        return <RegisterForm onLoginClick={() => setCurrentForm('login')} />;
      case 'success':
        return (
          <RegisterSuccess
            onLoginClick={() => setCurrentForm('login')}
            onRegisterClose={closeModal}
          />
        );
      default: {
        const _exhaustiveCheck: never = currentForm;
        throw new Error(`Необработанный случай: ${_exhaustiveCheck}`);
      }
    }
  };
  return <div className="auth">{renderAuthForm()}</div>;
};
