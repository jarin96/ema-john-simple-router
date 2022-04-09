// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApP57r44zN1Oav8DqOeNYILQTBOKFqR14",
    authDomain: "ema-john-simple-c5853.firebaseapp.com",
    projectId: "ema-john-simple-c5853",
    storageBucket: "ema-john-simple-c5853.appspot.com",
    messagingSenderId: "1046804745789",
    appId: "1:1046804745789:web:ce9dcde45874dbd292e454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;