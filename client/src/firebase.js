// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nisha-blog.firebaseapp.com",
  projectId: "nisha-blog",
  storageBucket: "nisha-blog.appspot.com",
  messagingSenderId: "126521182237",
  appId: "1:126521182237:web:d47119e67f5d96191b1ef4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
