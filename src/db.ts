import firebase from "firebase/app"
// import "firebase/auth"

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics';
import { getApp } from '@firebase/app';
import { getAuth, Auth } from 'firebase/auth';
// import { getStripePayments } from '@stripe/firestore-stripe-payments';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase

// Load config from environment
const {
    VITE_APP_FIREBASE_API_KEY,
    VITE_APP_FIREBASE_AUTH_DOMAIN,
    VITE_APP_FIREBASE_DATABASE_URL,
    VITE_APP_FIREBASE_PROJECT_ID,
    VITE_APP_FIREBASE_STORAGE_BUCKET,
    VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    VITE_APP_FIREBASE_APP_ID,
    VITE_APP_FIREBASE_MEASUREMENT_ID,
} = import.meta.env
// console.log(import.meta.env)
const firebaseConfig = {
  apiKey: VITE_APP_FIREBASE_API_KEY,
  authDomain: VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_APP_FIREBASE_APP_ID,
  measurementId: VITE_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app: firebase.FirebaseApp = initializeApp(firebaseConfig)
const firestore = getFirestore()
const analytics = getAnalytics(app);
const auth: Auth = getAuth()
// const app2 = getApp();
// const payments = getStripePayments(app2, {
//   productsCollection: 'products',
//   customersCollection: 'customers',
// });

export { app, firestore, analytics, auth }
