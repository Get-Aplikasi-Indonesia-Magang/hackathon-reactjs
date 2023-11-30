import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import db from './firebase';
// Sesuaikan path sesuai dengan struktur proyek Anda

const AddQuestion = ({ onAddQuestion }) => {
  const [newQuestion, setNewQuestion] = useState('');

  const handleInputChange = (event) => {
    setNewQuestion(event.target.value);
  };

  const handleAddQuestion = async () => {
    try {
      if (newQuestion.trim() !== '') {
        // Tambahkan pertanyaan ke koleksi 'questions' di Firestore
        const docRef = await addDoc(collection(db, 'questions'), {
          text: newQuestion,
        });

        // Panggil fungsi yang diberikan oleh prop untuk memberitahu komponen induk bahwa pertanyaan telah ditambahkan
        onAddQuestion(newQuestion);

        // Bersihkan input setelah pertanyaan ditambahkan
        setNewQuestion('');

        console.log('Pertanyaan berhasil ditambahkan dengan ID dokumen:', docRef.id);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menambahkan pertanyaan:', error);
    }
  };

  return (
    <div>
      {/* <h2>Tambah Pertanyaan Baru</h2>
      <input type="text" value={newQuestion} onChange={handleInputChange} />
      <button onClick={handleAddQuestion}>Tambah Pertanyaan</button> */}
    </div>
  );
};

export default AddQuestion;
