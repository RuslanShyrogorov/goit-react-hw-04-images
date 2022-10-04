import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { IoIosClose } from 'react-icons/io';
import { Overlay, CloseButton, ModalContent } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    const { closeModal } = this;

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
}
