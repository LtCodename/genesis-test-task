import React, {useState, useEffect} from 'react';
import { questionsData } from '../../questionsData';
import './GamePage.css';
import { useHistory } from "react-router-dom";

interface IQuestion {
  question: string;
  reward: number;
  answers: {
    answer: string;
    correct: boolean;
  }[]
}

function GamePage() {
  const history = useHistory();
  const initialQuestions:IQuestion[] = [];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState(initialQuestions);
  const [reward, setReward] = useState(0);

  useEffect(() => {
    setQuestions(questionsData);
  },[questionsData]);

  function handleAnswer(answerIndex:number) {
    console.log(answerIndex)
    if (questions[questionIndex].answers[answerIndex].correct) {
      setReward(questions[questionIndex].reward);
      let qi = questionIndex;
      let newQi = qi + 1;
      setQuestionIndex(newQi);
    } else {
      history.push("/end");
    }
  }

  let answers: any;

  if (questions.length) {
    answers = questions[questionIndex].answers.map((elem, index) => {
      return (
        <button key={index} onClick={() => handleAnswer(index)}>
         {elem.answer}
        </button>
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
