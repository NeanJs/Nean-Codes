// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0-OSW193dUgcvAdEDaMCHRm5K1q13KUU",
  authDomain: "nean-web-v2.firebaseapp.com",
  databaseURL: "https://nean-web-v2-default-rtdb.firebaseio.com",
  projectId: "nean-web-v2",
  storageBucket: "nean-web-v2.appspot.com",
  messagingSenderId: "753005567005",
  appId: "1:753005567005:web:9fcb1feb03b4d5bee43af4",
  measurementId: "G-79L8FZ38M6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
