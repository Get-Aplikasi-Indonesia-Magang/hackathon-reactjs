import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore'; // Import fungsi-fungsi Firestore yang diperlukan
import { db } from './firebase'; // Sesuaikan path sesuai dengan struktur proyek Anda

const AnswerQuestion = ({ questionId }) => {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSave = async () => {
    try {
      if (answer.trim() !== '') {
        // Tambahkan jawaban ke koleksi 'answers' di Firestore
        const docRef = await addDoc(collection(db, 'answers'), {
          questionId,
          text: answer,
        });

        console.log('Jawaban berhasil disimpan dengan ID dokumen:', docRef.id);

        // Tentukan logika atau tindakan tambahan setelah jawaban berhasil disimpan
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
