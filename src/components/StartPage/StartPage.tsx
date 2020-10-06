import React from 'react';
import { StartGameIcon } from '../../assets';
import Button from '../Button/Button';
import './StartPage.css';

function StartPage() {
  return (
    <div className="start-page-container column column-h column-v">
      <div className="start-page-content">
        <span className="logo">{StartGameIcon}</span>
        <div className="column column-v start-text-and-button">
          <span className="game-start-text">Who wants to be a millionaire?</span>
          <span className="start-game-button">
            <Button buttonText={"Start"} route={"/game"}></Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
