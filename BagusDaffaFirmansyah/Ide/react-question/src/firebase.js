// firebase.js

// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCghPb_Ky7C_0lOpmOMwYIbfLmC7QH60o4',
  authDomain: 'projet-react-6b601.firebaseapp.com',
  projectId: 'projet-react-6b601',
  storageBucket: 'projet-react-6b601.appspot.com',
  messagingSenderId: '395435006781',
  appId: '1:395435006781:web:411607c25dceebae2ec354',
  measurementId: 'G-PYEZHDGTVS',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; // Menggunakan default export untuk db
