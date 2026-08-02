// Firebase setup for this project.
// This file is the central configuration point for any future Firebase auth, database, or storage features.
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use.
// See: https://firebase.google.com/docs/web/setup#available-libraries

// Firebase web app configuration.
// These values are project-specific and should be kept private in production environments.
const firebaseConfig = {
  apiKey: "AIzaSyDYmjhfHqIPfWnwJAl5VgQCMVOLZ7k6mbo",
  authDomain: "myquizworld-a2850.firebaseapp.com",
  databaseURL: "https://myquizworld-a2850-default-rtdb.firebaseio.com",
  projectId: "myquizworld-a2850",
  storageBucket: "myquizworld-a2850.appspot.com",
  messagingSenderId: "3230072239",
  appId: "1:3230072239:web:78f1c1ffab7bc772c1435a",
  measurementId: "G-YD8WFD9ZCM",
};

// Initialize Firebase app and export it so other modules can reuse the instance.
export const app = initializeApp(firebaseConfig);