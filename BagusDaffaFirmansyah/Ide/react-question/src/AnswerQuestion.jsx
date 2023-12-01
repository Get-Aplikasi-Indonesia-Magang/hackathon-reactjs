import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

const AnswerQuestion = ({ questionId }) => {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSave = async () => {
    try {
      if (answer.trim() !== '') {
        const docRef = await addDoc(collection(db, 'answers'), {
          questionId,
          text: answer,
        });

        console.log('Jawaban berhasil disimpan dengan ID dokumen:', docRef.id);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menyimpan jawaban:', error);
    }
  };

  return (
    <div>
      <h3>Jawab Pertanyaan:</h3>
      <textarea placeholder="Jawaban..." value={answer} onChange={handleAnswerChange} />
      <button onClick={handleSave}>Kirim Jawaban</button>
    </div>
  );
};

export default AnswerQuestion;
