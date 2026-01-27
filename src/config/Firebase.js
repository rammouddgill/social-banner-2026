import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAcjMsIEgXUrePAE3HxJqTyB9MzZK10pXc",
  authDomain: "social-banner-maker.firebaseapp.com",
  projectId: "social-banner-maker",
  storageBucket: "social-banner-maker.appspot.com",
  messagingSenderId: "219969170019",
  appId: "1:219969170019:web:10cfe2cb31ee94a4d76656",
  measurementId: "G-STPMY536B5",
};

let analytics;

// Check if running on the client side before initializing Firebase Analytics
if (typeof window !== "undefined") {
  const firebaseApp = initializeApp(firebaseConfig);
  analytics = getAnalytics(firebaseApp);
}

// const firebaseApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(firebaseApp);
export { analytics };
