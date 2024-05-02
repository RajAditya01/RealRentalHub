import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realrentalhub.firebaseapp.com",
  projectId: "realrentalhub",
  storageBucket: "realrentalhub.appspot.com",
  messagingSenderId: "877903981043",
  appId: "1:877903981043:web:cb88ae57f56758c503ca86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
