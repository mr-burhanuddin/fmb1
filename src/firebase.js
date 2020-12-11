 import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBEbx6ir_-7DEydC0N4Jp_zSfn9N5OImBs",
    authDomain: "fmbnagpur-c1325.firebaseapp.com",
    projectId: "fmbnagpur-c1325",
    storageBucket: "fmbnagpur-c1325.appspot.com",
    messagingSenderId: "613971470280",
    appId: "1:613971470280:web:e6f12cf0524e757cda02fd",
    measurementId: "G-QHHERBPJQG"
  });

  const db = firebaseApp.firestore();

  export default db;