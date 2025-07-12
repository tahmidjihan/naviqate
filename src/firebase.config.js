// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCI8XXH7393R8s9wU4rvsa2Z64KnoXTF7k',
  authDomain: 'naviqate-da94c.firebaseapp.com',
  projectId: 'naviqate-da94c',
  storageBucket: 'naviqate-da94c.firebasestorage.app',
  messagingSenderId: '66941601571',
  appId: '1:66941601571:web:3b393c78e09bff96f12e96',
  measurementId: 'G-H1SVL5BC7T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
