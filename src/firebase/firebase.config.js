// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHfkeNZg7Oz459sf_0Wx-D9N-g93IPLfQ",
  authDomain: "dimple-firebase-applicat-38e6e.firebaseapp.com",
  projectId: "dimple-firebase-applicat-38e6e",
  storageBucket: "dimple-firebase-applicat-38e6e.appspot.com",
  messagingSenderId: "251958644416",
  appId: "1:251958644416:web:82197ee020be930c756725",
  measurementId: "G-5L4RECFTBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;