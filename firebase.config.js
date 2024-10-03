// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhZdST85Oojt4X5E5xEWsHVmXTdvQc2Ag",
  authDomain: "nijan-adhikari.firebaseapp.com",
  projectId: "nijan-adhikari",
  storageBucket: "nijan-adhikari.appspot.com",
  messagingSenderId: "893827452137",
  appId: "1:893827452137:web:98c18c380a788478863478",
  measurementId: "G-LHJFD6X25N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
