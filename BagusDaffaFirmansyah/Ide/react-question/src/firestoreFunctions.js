// // firestoreFunctions.js
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import db from './firebase';

// export const saveAnswerToFirestore = async (questionId, answerText) => {
//   const answersCollection = collection(db, 'answers');

//   try {
//     const newAnswer = {
//       questionId,
//       answerText,
//       timestamp: serverTimestamp(),
//     };

//     const docRef = await addDoc(answersCollection, newAnswer);
//     console.log('Answer added with ID: ', docRef.id);
//     return docRef.id; // Jika Anda perlu mengembalikan ID jawaban
//   } catch (error) {
//     console.error('Error adding answer: ', error);
//     throw error; // Lebih baik untuk menangani kesalahan di tempat lain di aplikasi Anda
//   }
// };
