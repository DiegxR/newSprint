import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAPQ3y02pC33DeZCCB2OgLiq__zZuezC-0",
  authDomain: "sprint-4-f5d98.firebaseapp.com",
  projectId: "sprint-4-f5d98",
  storageBucket: "sprint-4-f5d98.appspot.com",
  messagingSenderId: "822090928712",
  appId: "1:822090928712:web:d9f09f98a4176ab4423e7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app) 