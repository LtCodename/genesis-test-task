import React from 'react';
import './Button.css';
import { useHistory } from "react-router-dom";

interface IButton {
  buttonText: string;
  route: string;
}

const Button: React.FC<IButton> = (
    { buttonText, route },
) => {
  const history = useHistory();

  function handleClick() {
    history.push(route);
  }

  return (
    <button className="millionaire-button" onClick={handleClick}>{buttonText}</button>
  );
}

export default Button;
