// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDxzjrO7smK828__NvvXqE8Ixf7-gZh65Y",
  authDomain: "crud-simples-84b3c.firebaseapp.com",
  projectId: "crud-simples-84b3c",
  storageBucket: "crud-simples-84b3c.appspot.com",
  messagingSenderId: "947449039813",
  appId: "1:947449039813:web:ff11acaa843a42aaed19ac"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
