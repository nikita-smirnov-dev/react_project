import type { FC } from 'react';

import './Modal.css';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: VoidFunction;
  isTrailerPage?: boolean;
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  isTrailerPage = false,
}) => {
  return (
    isOpen && (
      <div
        className={`modal-overlay ${
          isTrailerPage ? 'modal-overlay__trailer' : ''
        }`}
      >
        <div className="modal-content">
          <button
            className="modal-close btn-reset"
            aria-label="Закрыть модальное окно"
            onClick={onClose}
          >
            <IoMdClose className="modal-close_svg" aria-hidden="true" />
          </button>
          {children}
        </div>
      </div>
    )
  );
};
