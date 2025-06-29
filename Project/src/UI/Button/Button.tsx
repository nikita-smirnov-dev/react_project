import type { FC } from 'react';
import './Button.css';

interface ButtonProps {
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: VoidFunction;
  type?: 'button' | 'submit' | 'reset';
  variantAction?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  isLoading,
  isDisabled = isLoading,
  children,
  className = '',
  onClick,
  type = 'button',
  variantAction = 'primary',
}) => {
  return (
    <button
      className={`button button--${variantAction} ${className || ''}`}
      onClick={onClick}
      disabled={isDisabled}
      type={type}
    >
      {children}
    </button>
  );
};
