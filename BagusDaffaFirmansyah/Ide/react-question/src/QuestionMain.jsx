import React, { useState } from 'react';
import QuestionList from './QuestionList';
import AddQuestion from './AddQuestion';
import './App.css';

const App = () => {
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, { text: newQuestion, answer: '' }]);
  };

  const handleEditQuestion = (questionIndex, editedQuestion, answer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex] = { text: editedQuestion, answer };
    setQuestions(updatedQuestions);
  };

  const handleDeleteQuestion = (questionIndex) => {
    const updatedQuestions = questions.filter((_, index) => index !== questionIndex);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="container">
      <h1>Aplikasi Pertanyaan dan Jawaban</h1>
      <AddQuestion onAddQuestion={handleAddQuestion} />
      <QuestionList questions={questions} onEdit={handleEditQuestion} onDelete={handleDeleteQuestion} />
    </div>
  );
};

export default App;
