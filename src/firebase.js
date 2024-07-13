// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYmjhfHqIPfWnwJAl5VgQCMVOLZ7k6mbo",
  authDomain: "myquizworld-a2850.firebaseapp.com",
  databaseURL: "https://myquizworld-a2850-default-rtdb.firebaseio.com",
  projectId: "myquizworld-a2850",
  storageBucket: "myquizworld-a2850.appspot.com",
  messagingSenderId: "3230072239",
  appId: "1:3230072239:web:78f1c1ffab7bc772c1435a",
  measurementId: "G-YD8WFD9ZCM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);