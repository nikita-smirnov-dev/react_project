import type { FC } from 'react';
import './Button.css';

interface ButtonProps {
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: VoidFunction;
  type?: string;
}

export const Button: FC<ButtonProps> = ({
  isLoading,
  isDisabled = isLoading,
  children,
  className = '',
  onClick,
}) => {
  return (
    <button
      className={`button  ${className || ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
