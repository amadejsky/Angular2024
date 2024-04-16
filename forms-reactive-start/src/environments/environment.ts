// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSBjQSv1W4UuAfhcYsx1gs7P2wTqQRawU",
  authDomain: "reactiveforms-fa109.firebaseapp.com",
  projectId: "reactiveforms-fa109",
  storageBucket: "reactiveforms-fa109.appspot.com",
  messagingSenderId: "5523726810",
  appId: "1:5523726810:web:8a465afa538a74a249e0e3",
  measurementId: "G-XS1CK9XJYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  production: false
};