// src/components/Quiz.js
import React, { useState } from 'react';
import Question from './Question';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz selesai. Skor Anda: ${score}`);
      // Reset quiz
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div>
      <h2>Quiz React</h2>
      <Question question={questions[currentQuestion].question} options={questions[currentQuestion].options} handleAnswer={handleAnswer} />
    </div>
  );
};

export default Quiz;
