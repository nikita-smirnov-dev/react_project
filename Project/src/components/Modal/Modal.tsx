import type { FC } from 'react';

import './Modal.css';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export const Modal: FC<ModalProps> = ({ children, isOpen }) => {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">{children}</div>
      </div>
    )
  );
};
