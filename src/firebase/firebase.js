import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvjQajIb3pP5YqkXRNaHmebYae7zBIRJY",
  authDomain: "bigb2-feaeb.firebaseapp.com",
  projectId: "bigb2-feaeb",
  storageBucket: "bigb2-feaeb.firebasestorage.app",
  messagingSenderId: "706947235707",
  appId: "1:706947235707:web:275eb1fb94e92c2fe6c7de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();