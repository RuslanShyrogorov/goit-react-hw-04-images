import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';

export const Overlay = styled.div`
  position: fixed;
  top: ${p => p.theme.space[0]}px;
  left: ${p => p.theme.space[0]}px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.modal};
  z-index: ${p => p.theme.zIndices.modal};
`;
export const CloseButton = styled(IoIosClose)`
  position: absolute;
  top: ${p => p.theme.space[3]}px;
  right: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.space[5]}px;
  height: ${p => p.theme.space[5]}px;
  fill: ${p => p.theme.colors.white};
`;

export const ModalContent = styled.div`
  max-width: calc(100vw - ${p => p.theme.space[6]}px);
  max-height: calc(100vh - ${p => p.theme.space[5]}px);
  overflow: hidden;
  object-fit: contain;
`;
