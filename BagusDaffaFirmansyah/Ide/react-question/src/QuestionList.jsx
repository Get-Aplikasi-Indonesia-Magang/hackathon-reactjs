import React, { useState } from 'react';
import EditQuestion from './EditQuestion';
import AnswerList from './AnswerList';

const QuestionList = () => {
  const [newQuestionText, setNewQuestionText] = useState('');
  const [questions, setQuestions] = useState([]);
  const [editingQuestionId, setEditingQuestionId] = useState(null);

  const handleAddQuestion = () => {
    if (newQuestionText.trim() !== '') {
      const newQuestion = { id: Date.now(), text: newQuestionText, answers: [] };
      setQuestions([...questions, newQuestion]);
      setNewQuestionText('');
      setEditingQuestionId(newQuestion.id);
    }
  };

  const handleEditQuestion = (questionId, editedQuestion) => {
    const updatedQuestions = questions.map((question) => (question.id === questionId ? { ...question, text: editedQuestion.text } : question));
    setQuestions(updatedQuestions);
    setEditingQuestionId(null);
  };

  const handleDeleteQuestion = (questionId) => {
    const updatedQuestions = questions.filter((question) => question.id !== questionId);
    setQuestions(updatedQuestions);
    setEditingQuestionId(null);
  };

  const handleAnswerQuestion = (questionId, answer) => {
    const updatedQuestions = questions.map((question) => (question.id === questionId ? { ...question, answers: [...question.answers, answer] } : question));
    setQuestions(updatedQuestions);
    setEditingQuestionId(null);
  };

  const handleCancel = () => {
    setEditingQuestionId(null);
  };

  return (
    <div>
      <h2>Daftar Pertanyaan</h2>
      <div>
        <label htmlFor="newQuestion">Pertanyaan Baru:</label>
        <input type="text" id="newQuestion" value={newQuestionText} onChange={(e) => setNewQuestionText(e.target.value)} />
        <button onClick={handleAddQuestion}>Tambah Pertanyaan</button>
      </div>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {editingQuestionId === question.id ? (
              <EditQuestion question={question} onSave={(editedQuestion) => handleEditQuestion(question.id, editedQuestion)} onCancel={handleCancel} onAnswer={(answer) => handleAnswerQuestion(question.id, answer)} />
            ) : (
              <>
                <div>{question.text}</div>
                <AnswerList answers={question.answers} />
                <button onClick={() => setEditingQuestionId(question.id)}>Edit Pertanyaan</button>
                <button onClick={() => handleDeleteQuestion(question.id)}>Hapus</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
