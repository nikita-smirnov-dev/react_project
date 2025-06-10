import type { FC } from 'react';

import './Modal.css';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: VoidFunction;
}

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <button
            className="modal-close btn-reset"
            aria-label="Закрыть модальное окно"
            onClick={onClose}
          >
            <IoMdClose className="modal-close_svg" />
          </button>
          {children}
        </div>
      </div>
    )
  );
};
