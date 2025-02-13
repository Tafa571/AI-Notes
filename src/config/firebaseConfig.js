// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ4hWT0E-IDej2cdvDtlhat9S5vn9S31k",
  authDomain: "ai-notes-6288b.firebaseapp.com",
  projectId: "ai-notes-6288b",
  storageBucket: "ai-notes-6288b.appspot.com",
  messagingSenderId: "196045338778",
  appId: "1:196045338778:web:8828f420c7e2a12d668723",
  measurementId: "G-DCMJQKSW12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics };