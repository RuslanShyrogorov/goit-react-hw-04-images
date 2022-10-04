// import styled from 'styled-components';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

// const bounceAnimation = keyframes`${bounce}`;

export const Bouncy = styled.div`
  animation: 0.5s ${keyframes`${bounce}`} infinite;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.9);
  z-index: 100;
  transition: 0.6s;
`;

export const Loader = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #ff3d00;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
`;
