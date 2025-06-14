import { createContext, type FC, useState } from 'react';

interface TrailerModalContextProps {
  isModalTrailerOpen: boolean;
  openModalTrailer: VoidFunction;
  closeModalTrailer: VoidFunction;
}

const TrailerModalContext = createContext<TrailerModalContextProps | null>(
  null
);

interface ModalProvaiderProps {
  children: React.ReactNode;
}

const TrailerModalProvaider: FC<ModalProvaiderProps> = ({ children }) => {
  const [isModalTrailerOpen, setIsOpenTrailerModal] = useState(false);

  const openModal = () => {
    setIsOpenTrailerModal(true);
  };
  const closeModal = () => {
    setIsOpenTrailerModal(false);
  };

  return (
    <TrailerModalContext.Provider
      value={{
        isModalTrailerOpen,
        openModalTrailer: openModal,
        closeModalTrailer: closeModal,
      }}
    >
      {children}
    </TrailerModalContext.Provider>
  );
};

export { TrailerModalProvaider, TrailerModalContext };
