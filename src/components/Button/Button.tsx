import React, { useContext } from "react";
import "./Button.css";
import { useHistory } from "react-router-dom";
import { Context } from "../../App";

interface IButton {
  buttonText: string;
  route: string;
}

const Button: React.FC<IButton> = ({ buttonText, route }) => {
  const { reloadRewardValue } = useContext(Context);

  const history = useHistory();

  function handleClick() {
    reloadRewardValue(0);

    setTimeout(() => {
      history.push(route);
    }, 0);
  }

  return (
    <button className="millionaire-button" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;
