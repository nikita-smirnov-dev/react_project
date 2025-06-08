import type { FC } from 'react';
import './Input.css';

interface InputProps {
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
  type?: string;
}

export const Input: FC<InputProps> = ({
  children,
  className,
  type,
  placeholder,
}) => {
  return (
    <div className="input-wrapper">
      {children}
      <input
        className={`input ${className || ''}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
