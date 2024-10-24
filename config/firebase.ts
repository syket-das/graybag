// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAcTkKdrzE9fxgLl2PIOPubhFiZDUJrfBs',
  authDomain: 'graybag-18f2b.firebaseapp.com',
  projectId: 'graybag-18f2b',
  storageBucket: 'graybag-18f2b.appspot.com',
  messagingSenderId: '828230418658',
  appId: '1:828230418658:web:687890abb08da7b8709ebb',
  measurementId: 'G-CX849PFD29',
};

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
