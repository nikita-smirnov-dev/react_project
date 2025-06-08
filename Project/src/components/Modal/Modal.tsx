import type { FC } from 'react';

import './Modal.css';

interface ModalProps {
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>
  );
};
