import { type FC } from 'react';
import './FormField.css';

interface FormFieldProps {
  children: React.ReactNode;
  label: string;
  errorMessage?: string;
}

export const FormField: FC<FormFieldProps> = ({
  children,
  label,
  errorMessage,
}) => {
  return (
    <label className="form-field">
      <span className="visually-hidden">{label}</span>
      {children}
      {errorMessage && (
        <span className="form-field__error-text">{errorMessage}</span>
      )}
    </label>
  );
};
