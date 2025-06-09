import { useContext } from 'react';
import { AuthModalContext } from '../context/AuthModalContext';

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);

  if (context === null) {
    throw new Error('useModal должен использоваться внутри ModalProvaider');
  }

  return context;
};
