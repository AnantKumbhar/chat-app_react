// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjg2-XZGmN5gVntl8tGVeQP2voEKKYJf8",
  authDomain: "my-react-app-aa67d.firebaseapp.com",
  projectId: "my-react-app-aa67d",
  storageBucket: "my-react-app-aa67d.firebasestorage.app",
  messagingSenderId: "914681732641",
  appId: "1:914681732641:web:036bd8d61c9458dd348d60",
  measurementId: "G-D4B9EC9ELY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);