// src/EditQuestion.js
import React, { useState } from 'react';

const EditQuestion = ({ question, onSave, onCancel, onAnswer }) => {
  const [answerText, setAnswerText] = useState('');

  const handleAnswerClick = () => {
    onAnswer(answerText);
    setAnswerText('');
  };

  return (
    <div>
      <div>Pertanyaan: {question.text}</div>
      <input type="text" value={answerText} onChange={(e) => setAnswerText(e.target.value)} placeholder="Jawaban" />
      <button onClick={handleAnswerClick}>Simpan Jawaban</button>
      <button onClick={onCancel}>Batal</button>
    </div>
  );
};

export default EditQuestion;
