// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg35wOKxL-qMC6iSYI89Z5GEcu6K6l2yI",
  authDomain: "chatapp-f999b.firebaseapp.com",
  projectId: "chatapp-f999b",
  storageBucket: "chatapp-f999b.appspot.com",
  messagingSenderId: "1078079594109",
  appId: "1:1078079594109:web:097ebc0c22727d60d51b14",
  measurementId: "G-P8KB6QX337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)