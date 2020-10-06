import React, { useState } from 'react';
import './AnswerButton.css';

interface IButton {
  buttonText: string;
  clickHandling: Function;
  letter: string;
  correct: boolean;
}

const AnswerButton: React.FC<IButton> = (
    { buttonText, clickHandling, letter, correct },
) => {
    const [buttonClass, setButtonClass] = useState("answer-button");

  function handleClick() {
    setButtonClass(`answer-button answer-button-${correct}`);
    setTimeout(() => { 
        setButtonClass(`answer-button`);
        clickHandling();
    }, 1000);
  }

  return (
    <button className={buttonClass} onClick={handleClick}>
        <span className="letter">{letter}</span>
        {buttonText}
    </button>
  );
}

export default AnswerButton;
