// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3DJe_LfP50llmUKX5uHG6Qx9UG6Qqc9U",
  authDomain: "brewitter-936cc.firebaseapp.com",
  projectId: "brewitter-936cc",
  storageBucket: "brewitter-936cc.appspot.com",
  messagingSenderId: "722242409351",
  appId: "1:722242409351:web:39826dc466a6166e73f922",
  measurementId: "G-T75TW2JT4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;