// AnswerForm.js
import { useState } from 'react';
import { saveAnswerToFirestore } from './firestoreFunctions';

const AnswerForm = ({ questionId, defaultAnswerText = 'Answer' }) => {
  const [answerText, setAnswerText] = useState(defaultAnswerText);

  const handleAnswerSubmit = async () => {
    try {
      if (answerText.trim() !== '') {
        await saveAnswerToFirestore(questionId, answerText);
        setAnswerText('');
        console.log('Jawaban berhasil disimpan!');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menyimpan jawaban: ', error);
    }
  };

  return (
    <div>
      <textarea value={answerText} onChange={(e) => setAnswerText(e.target.value)} />
      <button onClick={handleAnswerSubmit}>Submit Jawaban</button>
    </div>
  );
};

export default AnswerForm;
