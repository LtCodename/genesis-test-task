import React, { useContext } from 'react';
import { Context } from '../../App';
import { StartGameIcon } from '../../assets';
import Button from '../Button/Button';
import './EndPage.css';

function EndPage() {
  const { rewardValue } = useContext(Context);
  return (
    <div className="end-page-container column column-h column-v">
      <div className="row">
        <span className="logo">{StartGameIcon}</span>
        <div className="column column-v start-text-and-button">
          <span className="score-text">Total score:</span>
          <span className="earned-text">{`$${rewardValue} earned`}</span>
          <span className="start-game-button">
            <Button buttonText={"Try again"} route={"/game"}></Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default EndPage;
