import type { FC } from 'react';
import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string;
  onClick?: VoidFunction;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message, onClick }) => {
  return (
    <div className="error-wrapper">
      <span className="error-message text">{message}</span>
      <button className="error-btn button" onClick={onClick}>
        Повторить запрос
      </button>
    </div>
  );
};
