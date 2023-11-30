// src/AnswerList.js
import React from 'react';

const AnswerList = ({ answers }) => {
  return (
    <div>
      <h3>Jawaban:</h3>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnswerList;
