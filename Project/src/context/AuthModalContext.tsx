import { createContext, useState, type FC } from 'react';

interface AuthModalContextProps {
  isModalOpen: boolean;
  openModal: VoidFunction;
  closeModal: VoidFunction;
}

const AuthModalContext = createContext<AuthModalContextProps | null>(null);

interface ModalProvaiderProps {
  children: React.ReactNode;
}

const AuthModalProvider: FC<ModalProvaiderProps> = ({ children }) => {
  const [isModalOpen, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <AuthModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </AuthModalContext.Provider>
  );
};

export { AuthModalProvider, AuthModalContext };
