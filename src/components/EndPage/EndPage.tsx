import React from 'react';
import { StartGameIcon } from '../../assets';
import Button from '../Button/Button';
import './EndPage.css';

function EndPage() {
  return (
    <div className="end-page-container column column-h column-v">
      <div className="row">
        <span className="logo">{StartGameIcon}</span>
        <div className="column column-v start-text-and-button">
          <span className="score-text">Total score:</span>
          <span className="earned-text">$8,000 earned</span>
          <span className="start-game-button">
            <Button buttonText={"Try again"} route={"/game"}></Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default EndPage;
