import type { FC } from 'react';
import './Button.css';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, className = '' }) => {
  return <button className={`button  ${className}`}>{children}</button>;
};
