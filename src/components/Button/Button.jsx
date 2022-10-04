import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export default function Button({ text, type, onClick, children }) {
  return (
    <Btn type={type} onClick={onClick}>
      {text}
      {children}
    </Btn>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element,
};
