import React from 'react';
import './Button.css';

interface IButton {
    buttonText: string;
}

const Button: React.FC<IButton> = (
    { buttonText },
) => {
  return (
    <button className="millionaire-button">{buttonText}</button>
  );
}

export default Button;
