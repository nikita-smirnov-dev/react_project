import { useEffect, useState, type FC } from 'react';

import { IoMdClose } from 'react-icons/io';
import './Modal.css';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: VoidFunction;
}

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const showTimer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(showTimer);
    } else {
      setIsVisible(false);
      const hideTimer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(hideTimer);
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.removeProperty('overflow');
    };
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={`modal-overlay ${
        isVisible ? 'modal-overlay--visible' : 'modal-overlay--hide'
      }`}
      onClick={handleOverlayClick}
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
  );
};
