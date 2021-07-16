import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBCNoQE-rPQNCiZ5PhHIhhJHwq6Ez04ebo",
  authDomain: "asm1-30660.firebaseapp.com",
  projectId: "asm1-30660",
  storageBucket: "asm1-30660.appspot.com",
  messagingSenderId: "1059443183513",
  appId: "1:1059443183513:web:61aed77c4a19960a21cd08",
  measurementId: "G-1HLVWQW2T2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
export { firebaseApp, storage}