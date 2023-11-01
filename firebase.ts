// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXgiiXCg2eHMRDfVmjhddNQVMAeZ4jtuA",
  authDomain: "ux-resources-f6e04.firebaseapp.com",
  projectId: "ux-resources-f6e04",
  storageBucket: "ux-resources-f6e04.appspot.com",
  messagingSenderId: "137487338311",
  appId: "1:137487338311:web:41de196031b26e3ba09a62",
  measurementId: "G-DDL363MH35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics, app };
