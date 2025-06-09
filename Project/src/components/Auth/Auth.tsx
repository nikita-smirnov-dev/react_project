import { useState, type FC } from 'react';
import './Auth.css';
import { LoginForm } from '../LoginForm';
import { RegisterForm } from '../RegisterForm';
import { RegisterSuccess } from '../RegisterSuccess';

type AuthForm = 'login' | 'register' | 'success';

interface AuthProps {
  closeModal?: VoidFunction;
}

export const Auth: FC<AuthProps> = () => {
  const [currentForm, setCurrentForm] = useState<AuthForm>('login');

  const renderAuthForm = () => {
    switch (currentForm) {
      case 'login':
        return <LoginForm onRegisterClick={() => setCurrentForm('register')} />;
      case 'register':
        return <RegisterForm onLoginClick={() => setCurrentForm('login')} />;
      case 'success':
        return <RegisterSuccess onLoginClick={() => setCurrentForm('login')} />;
      default:
        return null;
    }
  };
  return <div className="auth">{renderAuthForm()}</div>;
};
