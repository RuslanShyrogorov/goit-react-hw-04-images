import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoIosClose } from 'react-icons/io';
import { Overlay, CloseButton, ModalContent } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  });

  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={closeModal}>
      <CloseButton type="button" onClick={closeModal}>
        <IoIosClose />
      </CloseButton>
      <ModalContent>{children}</ModalContent>
    </Overlay>,
    modalRoot
  );
}
