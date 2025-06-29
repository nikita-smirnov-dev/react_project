import type { FC } from 'react';
import type { FieldError } from 'react-hook-form';

import './Input.css';

interface InputProps {
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
  type?: string;
  error?: FieldError | undefined;
}

export const Input: FC<InputProps> = ({ children, className, ...props }) => {
  return (
    <div className={`input-wrapper ${props.error ? 'error' : ''}`}>
      {children}
      <input className={`input ${className || ''}`} {...props} />
    </div>
  );
};
