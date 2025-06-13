import React, { useState } from 'react';
import style from './quiz.module.css';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  }
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 800);
  };

  return (
    <div className={style.quizcontainer}>
      {showResult ? (
        <div className={style.result}>
          <h2>Your score: {score} / {questions.length}</h2>
        </div>
      ) : (
        <div className={style.questionbox}>
          <h2>{questions[current].question}</h2>
          <ul className={style.optionList}>
            {questions[current].options.map((option) => (
              <li
                key={option}
                className={`${style.option} ${selected === option ? style.selected : ''}`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
