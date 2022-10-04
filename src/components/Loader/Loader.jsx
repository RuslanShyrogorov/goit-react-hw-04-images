import React from 'react';
import { Backdrop, Bouncy } from './Loader.styled';

export default function Loader() {
  return (
    <Backdrop>
      <Bouncy>
        <p>Loading ...</p>
      </Bouncy>
    </Backdrop>
  );
}
