// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realrentalhub.firebaseapp.com",
  projectId: "realrentalhub",
  storageBucket: "realrentalhub.appspot.com",
  messagingSenderId: "877903981043",
  appId: "1:877903981043:web:cb88ae57f56758c503ca86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);