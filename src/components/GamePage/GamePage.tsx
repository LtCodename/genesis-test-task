import React, {useState, useEffect, useContext} from 'react';
import { questionsData } from '../../questionsData';
import './GamePage.css';
import { useHistory } from "react-router-dom";
import { Context } from '../../App';
import AnswerButton from '../AnswerButton/AnswerButton';

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

  useEffect(() => {
    setQuestions(questionsData);
  },[questionsData]);

  function handleAnswer(answerIndex:number) {

    if (questions[questionIndex].answers[answerIndex].correct) {
      setReward(questions[questionIndex].reward);
      let qi = questionIndex;
      let newQi = qi + 1;
      setQuestionIndex(newQi);
      reloadRewardValue(reward);
    } else {
      reloadRewardValue(reward);
      history.push("/end");
    }

    if (questionIndex === questionsData.length - 1) {
      history.push("/end");
    }
  }

  let answers: any;

  if (questions.length) {
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
  
  return (
    <div className="game-page-container column column-h column-v">
      <div className="row question-and-progress row-between">
        <div className="question column">
          <span className="question-text">{questions.length ? questions[questionIndex].question : "Error occured!"}</span>
          <div className="row answers-row">
            {answers}
          </div>
        </div>
        <div className="question-tree">
        question-tree
        </div>
      </div>
    </div>
  );
}

export default GamePage;
