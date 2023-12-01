import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXf6qn72QrJ03JXoEUqaYhMrluS5MXP9M",
    authDomain: "todo-crud-e9bba.firebaseapp.com",
    projectId: "todo-crud-e9bba",
    storageBucket: "todo-crud-e9bba.appspot.com",
    messagingSenderId: "165512663432",
    appId: "1:165512663432:web:191b7bec7bf7467eef2a3d",
    measurementId: "G-82WDND7KMH"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
