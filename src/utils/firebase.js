// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0ERV1dd_iy-MXuZDG6_QonvV0fO9XqX8",
  authDomain: "nirvana-e52b2.firebaseapp.com",
  projectId: "nirvana-e52b2",
  storageBucket: "nirvana-e52b2.appspot.com",
  messagingSenderId: "260976817803",
  appId: "1:260976817803:web:4619f01de02efb04cbc68e",
  measurementId: "G-BRKN9NXEM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();