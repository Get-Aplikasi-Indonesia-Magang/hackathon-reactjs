import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBpJK7ZgyjfjgI60ETd_UfCExdwgs1Y5N4',
  authDomain: 'react-project-ide.firebaseapp.com',
  projectId: 'react-project-ide',
  storageBucket: 'react-project-ide.appspot.com',
  messagingSenderId: '367339478006',
  appId: '1:367339478006:web:46cdf5b76aaac8668a45d7',
  measurementId: 'G-F96CNJ89SG',
};

const app = initializeApp(firebaseConfig);

export default app;
