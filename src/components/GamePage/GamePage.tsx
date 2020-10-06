import React, {useState, useEffect, useContext} from 'react';
import { questionsData } from '../../questionsData';
import './GamePage.css';
import { useHistory } from "react-router-dom";
import { Context } from '../../App';
import AnswerButton from '../AnswerButton/AnswerButton';
import RewardItem from '../RewardItem/RewardItem';
import { CloseIcon, MenuIcon } from '../../assets';

interface IQuestion {
  question: string;
  reward: number;
  answers: {
    answer: string;
    correct: boolean;
  }[]
}

interface ILetter {
  [key: string]: any;
}

const letters:ILetter = {
  0: "A",
  1: "B",
  2: "C",
  3: "D"
};

function GamePage() {
  const { reloadRewardValue } = useContext(Context);

  const history = useHistory();
  const initialQuestions:IQuestion[] = [];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState(initialQuestions);
  const [reward, setReward] = useState(0);

  const [bothSidesWrapperClass, setBothSidesWrapperClass] = useState("row question-and-progress row-between");
  const [leftPartClass, setLeftPartClass] = useState("question column");
  const [rightPartClass, setRightPartClass] = useState("question-tree column column-v column-h");
  const [menuType, setMenuType] = useState("burger");

  useEffect(() => {
    setQuestions(questionsData);
  },[]);

  function showQuestionsTree() {
    setLeftPartClass("question column question-forced-hide");
    setRightPartClass("question-tree column column-v column-h question-tree-forced-show");
    setMenuType("close");
  }

  function hideQuestionsTree() {
    setLeftPartClass("question column");
    setRightPartClass("question-tree column column-v column-h");
    setMenuType("burger");
  }

  function handleAnswer(answerIndex:number) {

    if (!questions[questionIndex].answers[answerIndex].correct) {
      history.push("/end");
      return;
    } else {
      setReward(questions[questionIndex].reward);
      reloadRewardValue(questions[questionIndex].reward);
      let qi = questionIndex;
      let newQi = qi + 1;
      setQuestionIndex(newQi);

      setTimeout(() => { 
        if (questionIndex === questionsData.length - 1) {
          history.push("/end");
        }
      }, 0);
    }
  }

  let answers: any;

  if (questions.length && questions[questionIndex]) {
    answers = questions[questionIndex].answers.map((elem, index) => {
      return (
        <AnswerButton 
          key={index} 
          letter={letters[index]} 
          buttonText={elem.answer} 
          correct={questions[questionIndex].answers[index].correct}
          clickHandling={() => handleAnswer(index)}>
        </AnswerButton>
      )
    });
  }

  let rewardItems: any;

  if (questions.length) {
    rewardItems = questions.slice(0).reverse().map((elem, index) => {
      return (
        <RewardItem 
          key={index} 
          text={elem.reward.toString()} 
          itemIndex={questions.length - index - 1}
          questionIndex={questionIndex}>
        </RewardItem>
      )
    });
  }
  
  return (
    <div className="game-page-container column column-h column-v">
      <div className={bothSidesWrapperClass}>
        <div className={leftPartClass}>
          <span className="question-text">{questions.length && questions[questionIndex] ? questions[questionIndex].question : "Error occured!"}</span>
          <div className="row answers-row">
            {answers}
          </div>
        </div>
        <div className={rightPartClass}>
          {rewardItems}
        </div>
        {menuType === "burger" ? <span className="show-menu-icon" onClick={showQuestionsTree}>{MenuIcon}</span> : <span className="show-menu-icon" onClick={hideQuestionsTree}>{CloseIcon}</span>}
      </div>
    </div>
  );
}

export default GamePage;
