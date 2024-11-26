// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAe-KG8WIMkdKsnJq_Dr8my6ivWU1AQ7vc",
    authDomain: "lingo-bingo-6af61.firebaseapp.com",
    projectId: "lingo-bingo-6af61",
    storageBucket: "lingo-bingo-6af61.firebasestorage.app",
    messagingSenderId: "876875997623",
    appId: "1:876875997623:web:4f7b44c3e80a8553f88832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;