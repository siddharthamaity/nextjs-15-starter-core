// components/quizAmir.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./AmirPage.module.css";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  userAnswer: number | null;
  backgroundImage: string;
};

export function QuizAmir() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "1) What is the specific location studied in this research?",
      options: [
        "Kampung Bagan Pasir, Tanjung Karang",
        "Kampung Bagan Lalang, Sepang",
        "Kampung Kuantan, Kuala Selangor",
        "Kampung Sungai Buloh, Selangor"
      ],
      correctAnswer: 0,
      userAnswer: null,
      backgroundImage: "/images/quiz1.jpg"
    },
    {
      id: 2,
      question: "2) What is the main ecosystem studied in this research?",
      options: [
        "Tropical rainforest",
        "Mangrove forest",
        "Peat swamp forest",
        "Montane forest"
      ],
      correctAnswer: 1,
      userAnswer: null,
      backgroundImage: "/images/quiz2.jpg"
    },
    {
      id: 3,
      question: "3) What time period does this study cover?",
      options: [
        "2000-2010",
        "2005-2015",
        "2014-2024",
        "2010-2020"
      ],
      correctAnswer: 2,
      userAnswer: null,
      backgroundImage: "/images/quiz3.jpg"
    },
    {
      id: 4,
      question: "4) Which satellite imagery was NOT mentioned in the methodology?",
      options: [
        "Landsat",
        "Sentinel",
        "ALOS",
        "Hubble Space Telescope"
      ],
      correctAnswer: 3,
      userAnswer: null,
      backgroundImage: "/images/quiz4.jpg"
    },
    {
      id: 5,
      question: "5) What is the primary threat to mangrove ecosystems mentioned in the study?",
      options: [
        "Climate change alone",
        "Natural processes only",
        "Urbanization and aquaculture",
        "Agricultural expansion only"
      ],
      correctAnswer: 2,
      userAnswer: null,
      backgroundImage: "/images/quiz5.jpg"
    },
    {
      id: 6,
      question: "6) What classification approach was used in the study?",
      options: [
        "Only supervised classification",
        "Only unsupervised classification",
        "Two-tiered classification approach",
        "Manual visual interpretation"
      ],
      correctAnswer: 2,
      userAnswer: null,
      backgroundImage: "/images/quiz6.jpg"
    },
    {
      id: 7,
      question: "7) What was the ISODATA method used for in this study?",
      options: [
        "Atmospheric correction",
        "Unsupervised classification",
        "Image enhancement",
        "Change detection"
      ],
      correctAnswer: 1,
      userAnswer: null,
      backgroundImage: "/images/quiz7.jpg"
    },
    {
      id: 8,
      question: "8) What is NOT mentioned as an ecosystem service provided by mangroves?",
      options: [
        "Carbon sequestration",
        "Coastal protection",
        "Freshwater supply",
        "Wildlife habitat"
      ],
      correctAnswer: 2,
      userAnswer: null,
      backgroundImage: "/images/quiz8.jpg"
    },
    {
      id: 9,
      question: "9) What was the main challenge mentioned in remote sensing analysis?",
      options: [
        "Lack of satellite coverage",
        "Cloud cover and sensor inconsistencies",
        "Too high resolution images",
        "Excessive ground truth data"
      ],
      correctAnswer: 1,
      userAnswer: null,
      backgroundImage: "/images/quiz9.jpg"
    },
    {
      id: 10,
      question: "10) What conservation strategy was emphasized in the study?",
      options: [
        "Complete protection with no human access",
        "Collaboration between stakeholders",
        "Relocation of local communities",
        "Commercial development of mangrove areas"
      ],
      correctAnswer: 1,
      userAnswer: null,
      backgroundImage: "/images/quiz10.jpg"
    }
  ];

  const handleAnswer = (optionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].userAnswer = optionIndex;
    
    if (optionIndex === updatedQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(optionIndex);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setQuizCompleted(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className={styles.page}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>EcoStudy</div>
        <div className={styles.navRight}>
          <Link href="/">Home</Link>
          <Link href="/amir">Back to Study</Link>
        </div>
      </nav>

      {/* Dynamic Background - Fixed positioning */}
      <div className={styles.backgroundWrapper}>
        <Image
          src={questions[currentQuestion].backgroundImage}
          alt="Question background"
          fill
          priority
          quality={100}
          className={styles.backgroundImage}
        />
      </div>

      {/* Quiz Container - Now Larger */}
      <div className={styles.quizPageContainer}>
        <h1 className={styles.quizTitle}>Quiz Section</h1>
        
        {!quizCompleted ? (
          <div className={styles.quizContent}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill}
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            
            <div className={styles.questionContainer}>
              <h2 className={styles.quizQuestion}>
                {questions[currentQuestion].question}
              </h2>
              
              <div className={styles.quizOptions}>
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`${styles.quizOption} ${
                      selectedOption !== null && index === selectedOption
                        ? index === questions[currentQuestion].correctAnswer
                          ? styles.correct
                          : styles.incorrect
                        : ""
                    }`}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedOption !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            
            <div className={styles.quizProgress}>
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        ) : (
          <div className={styles.quizResults}>
            <h2 className={styles.resultsTitle}>Quiz Completed!</h2>
            <p className={styles.resultsScore}>
              Your score: {score} out of {questions.length}
            </p>
            <div className={styles.resultsActions}>
              <button onClick={resetQuiz} className={styles.quizButton2}>
                Try Again
              </button>
              <Link href="/amir" className={styles.quizButton2}>
                Back to Study
              </Link>
            </div>
          </div>
        )}
      </div>
      
      <footer className={styles.footer}>
        © EcoStudy
      </footer>
    </div>
  );
}