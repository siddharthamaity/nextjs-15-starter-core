"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./QuizEnvironmental.module.css";
import Link from "next/link";


type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

const questions: Question[] = [
  {
    question: "What is the main goal of the study?",
    options: ["Promote the Twin Towers internationally", "Improve food services", "Evaluate tourism management's impact on customer satisfaction", "Increase Ticket Sales"],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is a major satisfaction factor mentioned in the study?",
    options: ["Parking lot capacity", "Weather Conditions", "Cleanliness", "Free Merchandise"],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is NOT listed as a management factor?",
    options: ["Staff Performance", "Infrastructure", "Cultural Dances", "Safety Protocols"],
    correctAnswer: 2,
  },
  {
    question: "Which aspect had the greatest impact on visitor satisfaction?",
    options: ["Weather", "Staff Behavior", "Ticket Price", "Food Stalls"],
    correctAnswer: 1,
  },
  {
    question: "Which is NOT mentioned as a management factor in the study?",
    options: ["Infrastructure", "Crowd Control", "Climate", "Staff Training"],
    correctAnswer: 3,
  },
  {
    question: "The study was conducted at multiple tourist sites across Malaysia.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question: "Tourism Management has little effect on repeat visits?",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question: "All visitors reported full satisfaction with their experience.",
    options: ["True", "False"],
    correctAnswer: 1,
  },
  {
    question: "Visitor safety is considered an important part of tourism management.",
    options: ["True", "False"],
    correctAnswer: 0,
  },
  {
    question: "The Twin Towers are important both for tourism and national identity.",
    options: ["True", "False"],
    correctAnswer: 0,
  },
  
];

export default function QuizEnvironmental() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);

    if (index === questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption(null);
      } else {
        setCompleted(true);
      }
    }, 1300);
  };
   const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setCompleted(false);
  };

  const progressPercent = ((currentQuestion + (selectedOption !== null ? 1 : 0)) / questions.length) * 100;

  let feedbackMessage = "";
  const percentage = (score / questions.length) * 100;

  if (percentage === 100) {
    feedbackMessage = "Excellent! You got all answers right! 🌟";
  } else if (percentage >= 75) {
    feedbackMessage = "Great job! You have a good understanding. 👍";
  } else if (percentage >= 50) {
    feedbackMessage = "Not bad, but there's room for improvement. 💡";
  } else {
    feedbackMessage = "Keep trying! Review the material and try again. 📘";
  }



  return (
    <div className={styles.container}>
      <h1>The Impact of Tourism Management Quiz</h1>

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progressPercent}%` }}></div>
      </div>

      {!completed ? (
        <div className={styles.quizBox}>
          <h2>{questions[currentQuestion].question}</h2>
          <div className={styles.options}>
            {questions[currentQuestion].options.map((opt, i) => {
              const isCorrect = i === questions[currentQuestion].correctAnswer;
              const isSelected = i === selectedOption;
              const showCorrect = selectedOption !== null && isCorrect;

              return (
                <button
                  key={i}
                  className={`${styles.option} 
                    ${isSelected ? (isCorrect ? styles.correct : styles.incorrect) : ""}
                    ${!isSelected && showCorrect ? styles.showCorrect : ""}
                  `}
                  onClick={() => handleAnswer(i)}
                  disabled={selectedOption !== null}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          <p>Question {currentQuestion + 1} of {questions.length}</p>
        </div>
      ) : (
        <div className={styles.result}>
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} / {questions.length}</p>
          <p className={styles.feedback}>{feedbackMessage}</p>
          

          <div className={styles.buttonGroup}>
            <button onClick={resetQuiz} className={styles.resetButton}>Try Again</button>
            <Link href="/" className={styles.homeButton}>Go Home</Link>
          </div>
        </div>
      )}
    </div>
  );
}
