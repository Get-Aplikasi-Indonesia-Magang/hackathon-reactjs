// src/App.js
import React from 'react';
import Quiz from './components/Quiz';
import './App.css';

const App = () => {
  const questions = [
    {
      question: 'Apa ibu kota Indonesia?',
      options: ['Jakarta', 'Surabaya', 'Bandung', 'Yogyakarta'],
      correctAnswer: 'Jakarta',
    },
    {
      question: 'Siapakah presiden pertama Indonesia?',
      options: ['Soekarno', 'Soeharto', 'Gus Dur', 'Megawati'],
      correctAnswer: 'Soekarno',
    },
  ];

  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
};

export default App;
