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
        const docRef = await addDoc(collection(db, 'questions'), {
          text: newQuestion,
        });

        onAddQuestion(newQuestion);

        setNewQuestion('');

        console.log('Pertanyaan berhasil ditambahkan dengan ID dokumen:', docRef.id);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menambahkan pertanyaan:', error);
    }
  };

  return <div></div>;
};

export default AddQuestion;
