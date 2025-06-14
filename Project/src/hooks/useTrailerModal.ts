import { useContext } from 'react';
import { TrailerModalContext } from '../context/TrailerModalContext';

export const useTrailerModal = () => {
  const context = useContext(TrailerModalContext);

  if (context === null) {
    throw new Error('useModal должен использоваться внутри ModalProvaider');
  }
  return context;
};
