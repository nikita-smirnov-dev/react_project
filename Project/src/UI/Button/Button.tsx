import type { FC } from 'react';
import './Button.css';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: VoidFunction;
  type?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
}) => {
  return (
    <button className={`button  ${className || ''}`} onClick={onClick}>
      {children}
    </button>
  );
};
