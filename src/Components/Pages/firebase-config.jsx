import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxhJ-8oUEkbeZSHlTmXwRCzMCLRywBwvY",
  authDomain: "datamanagement-2dd36.firebaseapp.com",
  projectId: "datamanagement-2dd36",
  storageBucket: "datamanagement-2dd36.appspot.com",
  messagingSenderId: "1007401685619",
  appId: "1:1007401685619:web:02401b1141d662eae19006",
  measurementId: "G-9BJ5M6JR6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);